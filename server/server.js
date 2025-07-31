// Import the Express module to use its features
const express = require("express");

// Import the path module to handle file and directory paths
const path = require("path");

// Create an Express application instance
const app = express();

// Set the port number where the server will run and listen
const PORT = 3000;

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, "../client/dist")));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
