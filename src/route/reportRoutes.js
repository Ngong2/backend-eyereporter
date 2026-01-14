/**
 * Report Routes
 * Defines API endpoints
 */

const express = require("express");
const router = express.Router();
const {
  createReport,
  getReports
} = require("../controllers/reportController");

// Submit a new report
router.post("/reports", createReport);

// Get all reports
router.get("/reports", getReports);

module.exports = router;
