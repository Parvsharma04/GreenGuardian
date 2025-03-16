const express = require("express");
const { PrismaClient } = require("@prisma/client");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");
const { body, validationResult } = require("express-validator");
const path = require("path");
const fs = require("fs");

const router = express.Router();
const prisma = new PrismaClient();

// Get all reports (with optional filters)
router.get("/", auth, async (req, res) => {
  try {
    const { status, type, severity } = req.query;
    const where = {};

    if (status) where.status = status;
    if (type) where.type = type;
    if (severity) where.severity = severity;

    const reports = await prisma.report.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: { user: { select: { name: true } } },
    });

    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: "Error fetching reports" });
  }
});

// Get user's reports
router.get("/my-reports", auth, async (req, res) => {
  try {
    const reports = await prisma.report.findMany({
      where: { userId: req.user.userId },
      orderBy: { createdAt: "desc" },
    });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: "Error fetching reports" });
  }
});

// Serve report images
router.get("/images/:userId/:reportId/:filename", auth, (req, res) => {
  const { userId, reportId, filename } = req.params;
  const imagePath = path.join(
    __dirname,
    "..",
    "uploads",
    userId,
    reportId,
    filename
  );

  // Check if file exists
  if (!fs.existsSync(imagePath)) {
    return res.status(404).json({ error: "Image not found" });
  }

  res.sendFile(imagePath);
});

// Create new report with image upload
router.post(
  "/",
  auth,
  upload.array("images", 5), // Handle multiple image uploads, max 5
  [
    body("type").notEmpty(),
    body("description").notEmpty(),
    body("location").notEmpty(),
    body("severity").isIn(["low", "medium", "high", "critical"]),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // If validation fails, delete uploaded files
        if (req.files) {
          const reportDir = path.join(
            __dirname,
            "..",
            "uploads",
            req.user.userId,
            req.reportId
          );
          fs.rmSync(reportDir, { recursive: true, force: true });
        }
        return res.status(400).json({ errors: errors.array() });
      }

      const { type, description, location, severity } = req.body;

      // Generate image URLs for uploaded files
      const imageUrls = req.files
        ? req.files.map(
            (file) =>
              `/api/reports/images/${req.user.userId}/${req.reportId}/${file.filename}`
          )
        : [];

      const report = await prisma.report.create({
        data: {
          userId: req.user.userId,
          type,
          description,
          location,
          severity,
          images: imageUrls,
        },
      });

      res.status(201).json(report);
    } catch (error) {
      // If database operation fails, delete uploaded files
      if (req.files) {
        const reportDir = path.join(
          __dirname,
          "..",
          "uploads",
          req.user.userId,
          req.reportId
        );
        fs.rmSync(reportDir, { recursive: true, force: true });
      }
      res.status(500).json({ error: "Error creating report" });
    }
  }
);

// Update report status
router.patch(
  "/:id/status",
  auth,
  [body("status").isIn(["pending", "in_progress", "resolved"])],
  async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const report = await prisma.report.update({
        where: { id },
        data: { status },
      });

      res.json(report);
    } catch (error) {
      res.status(500).json({ error: "Error updating report status" });
    }
  }
);

// Delete report and its images
router.delete("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;

    // Get report to check ownership and get reportId
    const report = await prisma.report.findUnique({
      where: { id },
      select: { userId: true, images: true },
    });

    if (!report) {
      return res.status(404).json({ error: "Report not found" });
    }

    // Check if user owns the report
    if (report.userId !== req.user.userId) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    // Delete report from database
    await prisma.report.delete({
      where: { id },
    });

    // Delete report images if they exist
    if (report.images && report.images.length > 0) {
      const reportDir = path.join(
        __dirname,
        "..",
        "uploads",
        req.user.userId,
        id
      );
      if (fs.existsSync(reportDir)) {
        fs.rmSync(reportDir, { recursive: true, force: true });
      }
    }

    res.json({ message: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting report" });
  }
});

module.exports = router;
