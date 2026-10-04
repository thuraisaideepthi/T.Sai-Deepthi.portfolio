const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Portfolio Backend is Running!");
});

// Start server
app.listen(5000, () => {
  console.log("Backend server running on http://localhost:5000");
});