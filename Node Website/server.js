const express = require("express");
const app = express();
const port = 3000;

// Serve static files from 'public' directory
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


// Instructions to run 
npm init -y
npm install express
mkdir public
node server.js
