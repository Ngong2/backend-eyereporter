/**
 * App Configuration
 */

const express = require("express");
const cors = require("cors");
const reportRoutes = require("../src/route/reportRoutes");

const app = express();

// Middleware
const whitelist = [process.env.FRONTEND_URL || "http://localhost:3000"];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) return callback(null, true);
    callback(new Error("Not allowed by CORS"));
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api", reportRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Eye Reporter Backend is running");
});

module.exports = app;
