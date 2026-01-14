/**
 * App Configuration
 */

const express = require("express");
const cors = require("cors");
const reportRoutes = require("../src/route/reportRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", reportRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Eye Reporter Backend is running");
});

module.exports = app;
