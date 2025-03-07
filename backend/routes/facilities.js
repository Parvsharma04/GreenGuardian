const express = require('express');
const { PrismaClient } = require('@prisma/client');
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

const router = express.Router();
const prisma = new PrismaClient();

// Get all facilities
router.get('/', async (req, res) => {
  try {
    const { type } = req.query;
    const where = type ? { type } : {};

    const facilities = await prisma.facility.findMany({
      where,
      orderBy: { name: 'asc' }
    });

    res.json(facilities);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching facilities' });
  }
});

// Get facility by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const facility = await prisma.facility.findUnique({
      where: { id }
    });

    if (!facility) {
      return res.status(404).json({ error: 'Facility not found' });
    }

    res.json(facility);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching facility' });
  }
});

// Add new facility (admin only - TODO: add admin middleware)
router.post('/',
  auth,
  [
    body('name').notEmpty(),
    body('type').isIn(['recycling_center', 'waste_disposal', 'composting']),
    body('location').notEmpty(),
    body('address').notEmpty(),
    body('hours').notEmpty(),
    body('acceptedMaterials').isArray()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, type, location, address, hours, acceptedMaterials } = req.body;

      const facility = await prisma.facility.create({
        data: {
          name,
          type,
          location,
          address,
          hours,
          acceptedMaterials
        }
      });

      res.status(201).json(facility);
    } catch (error) {
      res.status(500).json({ error: 'Error creating facility' });
    }
});

module.exports = router;