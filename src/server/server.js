// Object that holds destination data returned from geonames.org, darksky, and pixabay
let cityData = {};

const geoNamesBaseURL =
  "http://api.geonames.org/searchJSON?username=khalidhmd&maxRows=1&q="; // city name to be added at the end

const pixaBayBaseURL =
  "https://pixabay.com/api/?per_page=3&key=14840210-c74dad21ca2a61d4f298720be&q="; // city name to be added at the end

const darkSkyBaseURL =
  "https://api.darksky.net/forecast/3d0fee9bf48a9431297cab1129c1e650/"; // + lat,lng,time (time added if more than week)

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axio = require("axios").default;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.get("/trip", async (req, res) => {
  await getGeoData(req.query["city"]);

  res.send(cityData);
});

const getGeoData = async city => {
  const goeNamesdata = await axio.get(geoNamesBaseURL + city);
  const geoData = goeNamesdata.data.geonames[0];
  cityData.name = geoData.name;
  cityData.lat = geoData.lat;
  cityData.lng = geoData.lng;
  cityData.countryName = geoData.countryName;
};

// designates what port the app will listen to for incoming requests
const server = app.listen(process.env.PORT || 8080, function() {
  console.log(`Example app listening on port ${server.address().port} `);
});
