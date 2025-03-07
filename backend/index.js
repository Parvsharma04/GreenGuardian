require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const authRoutes = require('./routes/auth');
const recyclingRoutes = require('./routes/recycling');
const reportRoutes = require('./routes/reports');
const facilityRoutes = require('./routes/facilities');
const rewardRoutes = require('./routes/rewards');

const prisma = new PrismaClient();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/recycling', recyclingRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/facilities', facilityRoutes);
app.use('/api/rewards', rewardRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
// process.on('SIGTERM', async () => {
//   console.log('SIGTERM received. Closing HTTP server and Prisma Client');
//   await prisma.$disconnect();
//   process.exit(0);
// });