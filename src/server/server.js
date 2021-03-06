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

// prevent error when browser fetches teh favicon from the server
app.get("/favicon.ico", (req, res) => res.status(204));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.get("/trip", async (req, res) => {
  await getGeoData(req.query["city"]);
  await Promise.all([
    getPixaBayData(req.query["city"]),
    getDarkSkyData(cityData.lat, cityData.lng, req.query["date"]),
  ]);
  res.send(cityData);
});

// This function gets the city name, country name and lat/lng values for the city and sets them to the cityData object
const getGeoData = async city => {
  const goeNamesData = await axio.get(geoNamesBaseURL + city);
  const geoData = goeNamesData.data.geonames[0];
  cityData.name = geoData.name;
  cityData.lat = geoData.lat;
  cityData.lng = geoData.lng;
  cityData.countryName = geoData.countryName;
};

// This gets the image for the city
const getPixaBayData = async city => {
  const pixabayData = await axio.get(pixaBayBaseURL + city);
  const pixaData = pixabayData.data.hits[0];
  cityData.imgURL = pixaData.webformatURL;
};

// gets weather status for the city using the lat/lng and date
const getDarkSkyData = async (lat, lng, date) => {
  const darkskyData = await axio.get(
    `${darkSkyBaseURL}${lat},${lng},${date}?exclude=currently,hourly,flags`,
  );
  const darkData = darkskyData.data.daily.data[0];
  cityData.temperatureHigh = darkData.temperatureHigh;
  cityData.temperatureLow = darkData.temperatureLow;
  cityData.cloudCover = darkData.cloudCover;
};

// designates what port the app will listen to for incoming requests
const server = app.listen(process.env.PORT || 8080, function() {
  console.log(`Example app listening on port ${server.address().port} `);
});
