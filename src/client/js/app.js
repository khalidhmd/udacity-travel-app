const axios = require("axios");
const photoElement = document.getElementById("photo");
const destOutput = document.getElementById("dest-output");
const destOutput2 = document.getElementById("dest-output-2");
const dateOutput = document.getElementById("date-output");
const daysAway = document.getElementById("days-away");
const tempHigh = document.getElementById("temp-high");
const tempLow = document.getElementById("temp-low");
const cloudy = document.getElementById("cloudy");

//The callAPI() function sends request to the API implemented in server.js with the city and trip date
async function callAPI(city, date) {
  const baseUrl = "http://localhost:8080/trip?";
  try {
    const response = await axios.get(
      `${baseUrl}city=${city}&date=${date}T00:00:00`,
    );

    //add the trip date to the object returned from the API
    return { ...response.data, date };
  } catch (err) {
    console.log(err);
    return err;
  }
}

function DaysBetween(tripDate) {
  // The number of milliseconds in all UTC days (no DST)
  const oneDay = 1000 * 60 * 60 * 24;

  // A day in UTC always lasts 24 hours (unlike in other time formats)

  const end = new Date(tripDate);
  const d = new Date();
  const start = new Date(
    d.getMonth() < 10
      ? `${d.getFullYear()}-0${d.getMonth() + 1}-${d.getDate()}`
      : `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
  );
  console.log(tripDate);
  // so it's safe to divide by 24 hours

  return Math.floor((end.getTime() - start.getTime()) / oneDay);
}

// this function converts the cloudCover value returned to user friendly text
const getCloudCoverText = cloudCover => {
  if (cloudCover >= 0 && cloudCover < 0.1) return "Clear";
  if (cloudCover >= 0.1 && cloudCover < 0.2) return "Fair cloudy";
  if (cloudCover >= 0.2 && cloudCover < 0.3) return "Mostly sunny";
  if (cloudCover >= 0.3 && cloudCover < 0.6) return "Partly cloudy";
  if (cloudCover >= 0.6 && cloudCover < 0.8) return "Mostly cloudy";
  if (cloudCover >= 0.8 && cloudCover < 0.9) return "Broken cloudy";
  if (cloudCover >= 0.9 && cloudCover < 1) return "Cloudy/Overcast";
};

// This function renders the trip data to the web page
const renderUI = data => {
  destOutput.innerHTML = `${data.name}, ${data.countryName}`;
  photoElement.src = data.imgURL;
  dateOutput.innerHTML = data.date.replace(/-/g, `/`);
  destOutput2.innerHTML = document.getElementById("dest-output").innerHTML;
  daysAway.innerHTML = DaysBetween(data.date);
  tempHigh.innerHTML = data.temperatureHigh;
  tempLow.innerHTML = data.temperatureLow;
  cloudy.innerHTML = getCloudCoverText(data.cloudCover);
};

// event handler for saveTrip button
const saveTrip = (e, trip) => {
  localStorage.setItem("trips", JSON.stringify(trip));
};

// event handler for removeTrip button
const removeTrip = e => {
  localStorage.removeItem("trips");
  document.forms["form"].submit();
};

export { callAPI, renderUI, saveTrip, removeTrip };
