const express = require('express');
const { PrismaClient } = require('@prisma/client');
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

const router = express.Router();
const prisma = new PrismaClient();

// Get all available rewards
router.get('/', async (req, res) => {
  try {
    const rewards = await prisma.reward.findMany({
      where: {
        OR: [
          { expiresAt: null },
          { expiresAt: { gt: new Date() } }
        ]
      },
      orderBy: { points: 'asc' }
    });
    res.json(rewards);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching rewards' });
  }
});

// Get reward by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const reward = await prisma.reward.findUnique({
      where: { id }
    });

    if (!reward) {
      return res.status(404).json({ error: 'Reward not found' });
    }

    res.json(reward);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching reward' });
  }
});

// Add new reward (admin only - TODO: add admin middleware)
router.post('/',
  auth,
  [
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('points').isInt({ min: 0 }),
    body('type').isIn(['coupon', 'voucher', 'service']),
    body('value').isFloat({ min: 0 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { title, description, points, type, value, expiresAt } = req.body;

      const reward = await prisma.reward.create({
        data: {
          title,
          description,
          points,
          type,
          value,
          expiresAt: expiresAt ? new Date(expiresAt) : null
        }
      });

      res.status(201).json(reward);
    } catch (error) {
      res.status(500).json({ error: 'Error creating reward' });
    }
});

module.exports = router;