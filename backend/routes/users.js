const express = require("express");
const { PrismaClient } = require("@prisma/client");
const auth = require("../middleware/auth");
const { body, validationResult } = require("express-validator");

const router = express.Router();
const prisma = new PrismaClient();

// Get user profile and basic stats
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: {
        id: true,
        name: true,
        email: true,
        points: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user profile" });
  }
});

// Get user's recycling statistics
router.get("/recycling-stats", auth, async (req, res) => {
  try {
    const recyclingLogs = await prisma.recyclingLog.findMany({
      where: { userId: req.user.userId },
      orderBy: { createdAt: "desc" },
    });

    // Calculate total weight by type
    const weightByType = recyclingLogs.reduce((acc, log) => {
      acc[log.type] = (acc[log.type] || 0) + log.weight;
      return acc;
    }, {});

    // Calculate total points
    const totalPoints = recyclingLogs.reduce((sum, log) => sum + log.points, 0);

    // Calculate monthly stats
    const now = new Date();
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthlyLogs = recyclingLogs.filter(
      (log) => new Date(log.createdAt) >= thisMonth
    );
    const monthlyPoints = monthlyLogs.reduce((sum, log) => sum + log.points, 0);
    const monthlyWeight = monthlyLogs.reduce((sum, log) => sum + log.weight, 0);

    res.json({
      totalRecycled: recyclingLogs.length,
      totalWeight: recyclingLogs.reduce((sum, log) => sum + log.weight, 0),
      weightByType,
      totalPoints,
      monthlyStats: {
        points: monthlyPoints,
        weight: monthlyWeight,
        count: monthlyLogs.length,
      },
      recentLogs: recyclingLogs.slice(0, 5), // Last 5 recycling activities
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching recycling statistics" });
  }
});

// Get user's reporting statistics
router.get("/report-stats", auth, async (req, res) => {
  try {
    const reports = await prisma.report.findMany({
      where: { userId: req.user.userId },
      orderBy: { createdAt: "desc" },
    });

    // Calculate stats by status
    const statsByStatus = reports.reduce((acc, report) => {
      acc[report.status] = (acc[report.status] || 0) + 1;
      return acc;
    }, {});

    // Calculate stats by type
    const statsByType = reports.reduce((acc, report) => {
      acc[report.type] = (acc[report.type] || 0) + 1;
      return acc;
    }, {});

    // Calculate monthly stats
    const now = new Date();
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthlyReports = reports.filter(
      (report) => new Date(report.createdAt) >= thisMonth
    );

    res.json({
      totalReports: reports.length,
      resolvedReports: statsByStatus["resolved"] || 0,
      pendingReports: statsByStatus["pending"] || 0,
      inProgressReports: statsByStatus["in_progress"] || 0,
      statsByType,
      monthlyStats: {
        total: monthlyReports.length,
        resolved: monthlyReports.filter((r) => r.status === "resolved").length,
      },
      recentReports: reports.slice(0, 5), // Last 5 reports
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching report statistics" });
  }
});

// Get user's environmental impact
router.get("/environmental-impact", auth, async (req, res) => {
  try {
    const recyclingLogs = await prisma.recyclingLog.findMany({
      where: { userId: req.user.userId },
    });

    // Calculate CO2 savings (example conversion rates)
    const co2Savings = recyclingLogs.reduce((total, log) => {
      const conversionRates = {
        plastic: 2.5, // 2.5 kg CO2 per kg plastic
        paper: 1.5, // 1.5 kg CO2 per kg paper
        glass: 0.8, // 0.8 kg CO2 per kg glass
        metal: 3.0, // 3.0 kg CO2 per kg metal
      };
      return total + log.weight * (conversionRates[log.type] || 1);
    }, 0);

    // Calculate equivalent trees (rough estimate: 1 tree absorbs 20kg CO2 per year)
    const treesEquivalent = Math.round(co2Savings / 20);

    res.json({
      co2Saved: co2Savings,
      treesEquivalent,
      totalWeight: recyclingLogs.reduce((sum, log) => sum + log.weight, 0),
      impactByMaterial: recyclingLogs.reduce((acc, log) => {
        acc[log.type] = (acc[log.type] || 0) + log.weight;
        return acc;
      }, {}),
    });
  } catch (error) {
    res.status(500).json({ error: "Error calculating environmental impact" });
  }
});

// Get user's ranking and community stats
router.get("/community-ranking", auth, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: { points: true },
    });

    // Count users with more points (for ranking)
    const higherRanked = await prisma.user.count({
      where: {
        points: {
          gt: user.points,
        },
      },
    });

    // Get total user count
    const totalUsers = await prisma.user.count();

    // Calculate user's percentile
    const percentile = ((totalUsers - higherRanked) / totalUsers) * 100;

    // Get top contributors this month
    const now = new Date();
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const topContributors = await prisma.user.findMany({
      where: {
        recyclingLogs: {
          some: {
            createdAt: {
              gte: thisMonth,
            },
          },
        },
      },
      select: {
        name: true,
        points: true,
        _count: {
          select: {
            recyclingLogs: true,
            reports: true,
          },
        },
      },
      orderBy: {
        points: "desc",
      },
      take: 10,
    });

    res.json({
      rank: higherRanked + 1,
      totalUsers,
      percentile,
      topContributors,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching community ranking" });
  }
});

// Update user profile
router.patch(
  "/profile",
  auth,
  [body("name").optional().notEmpty(), body("email").optional().isEmail()],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email } = req.body;
      const updateData = {};

      if (name) updateData.name = name;
      if (email) updateData.email = email;

      const user = await prisma.user.update({
        where: { id: req.user.userId },
        data: updateData,
        select: {
          id: true,
          name: true,
          email: true,
          points: true,
          createdAt: true,
        },
      });

      res.json(user);
    } catch (error) {
      if (error.code === "P2002") {
        return res.status(400).json({ error: "Email already in use" });
      }
      res.status(500).json({ error: "Error updating profile" });
    }
  }
);

module.exports = router;
