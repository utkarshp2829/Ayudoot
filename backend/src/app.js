const express = require('express');
const cors = require('cors');

const env = require('./config/env');
const authRoutes = require('./routes/authRoutes');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(
  cors({
    origin: env.frontendUrl,
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ success: true, message: 'Ayudoot auth backend is running' });
});

app.use('/api/auth', authRoutes);

// Must be registered last.
app.use(errorHandler);

module.exports = app;