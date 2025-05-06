// server.js
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve index.html directly
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



// Instructions to run 
npm init -y
npm install express
mkdir public
node server.js
