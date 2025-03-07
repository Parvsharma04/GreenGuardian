const express = require('express');
const { PrismaClient } = require('@prisma/client');
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

const router = express.Router();
const prisma = new PrismaClient();

// Get user's recycling logs
router.get('/logs', auth, async (req, res) => {
  try {
    const logs = await prisma.recyclingLog.findMany({
      where: { userId: req.user.userId },
      orderBy: { createdAt: 'desc' }
    });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching recycling logs' });
  }
});

// Add new recycling log
router.post('/log',
  auth,
  [
    body('type').notEmpty(),
    body('weight').isFloat({ min: 0 }),
    body('location').notEmpty()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { type, weight, location } = req.body;

      // Calculate points (example: 10 points per kg)
      const points = Math.floor(weight * 10);

      // Create recycling log
      const log = await prisma.recyclingLog.create({
        data: {
          userId: req.user.userId,
          type,
          weight,
          points,
          location
        }
      });

      // Update user's total points
      await prisma.user.update({
        where: { id: req.user.userId },
        data: { points: { increment: points } }
      });

      res.status(201).json(log);
    } catch (error) {
      res.status(500).json({ error: 'Error creating recycling log' });
    }
});

// Get user's total points
router.get('/points', auth, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: { points: true }
    });
    res.json({ points: user.points });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching points' });
  }
});

module.exports = router;