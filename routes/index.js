const router = require('express').Router();
const apiRoutes = require('./api');

// Use /api routes
router.use('/api', apiRoutes);

// Fallback for unhandled routes under /api
router.use((req, res) => {
  res.status(404).send("<h1>Wrong Route!</h1>");
});

module.exports = router;
