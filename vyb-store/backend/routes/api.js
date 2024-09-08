const express = require('express');
const { calculateEarnings } = require('../controllers/earningsController');
const router = express.Router();

router.post('/calculate', calculateEarnings);

module.exports = router;
