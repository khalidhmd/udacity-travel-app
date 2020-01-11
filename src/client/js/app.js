const axios = require("axios");
const photoelement = document.getElementById("photo");
const destOutput = document.getElementById("dest-output");
const destOutput2 = document.getElementById("dest-output-2");
const dateOutput = document.getElementById("date-output");
const daysAway = document.getElementById("days-away");
const tempHigh = document.getElementById("temp-high");
const tempLow = document.getElementById("temp-low");
const cloudy = document.getElementById("cloudy");

async function callAPI(city, date) {
  const baseUrl = "http://localhost:8080/trip?";
  try {
    const response = await axios.get(
      `${baseUrl}city=${city}&date=${date}T00:00:00`,
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

const renderUI = data => {
  polarity.innerText = data.polarity;
  subjectivity.innerText = data.subjectivity;
  text.innerText = data.text;
  pconfidence.innerText = data["polarity_confidence"];
  sconfidence.innerText = data["subjectivity_confidence"];
};

export { callAPI, renderUI };
