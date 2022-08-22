
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

// Basic POST request
app.post("/",  (req, res, next) => {
  return res.status(200).json({
    message: "Hello Post",
  });
});

// The '*' is a REGEX character, all request beginning with 'ab' 
// and ending in 'cd' will connect to this endpoint
app.get('/ab*cd',(req, res, next) => {
  return res.status(200).json({
    message: "Endpoint beginning in \'ab\' and ending in \'cd\'",
  });
});

// For all other endpoints return not
app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports = app;
