const express = require('express');
const { PrismaClient } = require('@prisma/client');
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

const router = express.Router();
const prisma = new PrismaClient();

// Get all reports (with optional filters)
router.get('/', auth, async (req, res) => {
  try {
    const { status, type, severity } = req.query;
    const where = {};

    if (status) where.status = status;
    if (type) where.type = type;
    if (severity) where.severity = severity;

    const reports = await prisma.report.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: { user: { select: { name: true } } }
    });

    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching reports' });
  }
});

// Get user's reports
router.get('/my-reports', auth, async (req, res) => {
  try {
    const reports = await prisma.report.findMany({
      where: { userId: req.user.userId },
      orderBy: { createdAt: 'desc' }
    });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching reports' });
  }
});

// Create new report
router.post('/',
  auth,
  [
    body('type').notEmpty(),
    body('description').notEmpty(),
    body('location').notEmpty(),
    body('severity').isIn(['low', 'medium', 'high', 'critical']),
    body('images').isArray()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { type, description, location, severity, images } = req.body;

      const report = await prisma.report.create({
        data: {
          userId: req.user.userId,
          type,
          description,
          location,
          severity,
          images
        }
      });

      res.status(201).json(report);
    } catch (error) {
      res.status(500).json({ error: 'Error creating report' });
    }
});

// Update report status
router.patch('/:id/status',
  auth,
  [body('status').isIn(['pending', 'in_progress', 'resolved'])],
  async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const report = await prisma.report.update({
        where: { id },
        data: { status }
      });

      res.json(report);
    } catch (error) {
      res.status(500).json({ error: 'Error updating report status' });
    }
});

module.exports = router;