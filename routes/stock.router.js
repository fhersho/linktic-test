const express = require('express');
const router = express.Router();
const stockService = require("../services/stock.service")
router.get('/calculate', async function(req, res) {
  const data = await stockService.calculateStocks();
  res.status(200).json({total: data});
});

module.exports = router;
