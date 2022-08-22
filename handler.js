// AWS serverless express server used for this project 
const awsServerlessExpress = require('aws-serverless-express');

// Actual app where Express framework and endpoints are
const app = require('./src/Aws');

// Create server
const server = awsServerlessExpress.createServer(app);

// Export created server, as a response to the serverless.yml file
exports.handler = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context);
}

