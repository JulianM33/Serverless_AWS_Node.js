
const express = require("express");
const app = express();

// Root endpoint
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

// Basic /hello GET endpoint
app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

// For all other endpoints return not
app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports = app;
