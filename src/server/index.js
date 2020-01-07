const path = require("path");
const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static("dist"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

// designates what port the app will listen to for incoming requests
const server = app.listen(process.env.PORT || 8080, function() {
  console.log(`Example app listening on port ${server.address().port} `);
});
