import { callAPI, renderUI, saveTrip, removeTrip } from "./js/app";
import "./styles/style.scss";

let activeTrip = localStorage.getItem("trips");
if (activeTrip) renderUI(JSON.parse(activeTrip));
const form = document.getElementById("form");
const dateElement = document.getElementById("date");
const saveButton = document.getElementById("saveTrip");
const removeButton = document.getElementById("removeTrip");
const d = new Date();

// set the default date control value to current date
dateElement.value =
  d.getMonth() < 10
    ? `${d.getFullYear()}-0${d.getMonth() + 1}-${d.getDate()}`
    : `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

form.addEventListener("submit", async event => {
  event.preventDefault();
  const city = document.forms["form"]["destination"];
  if (city.value == "") {
    alert("You have to enter destination city");
    return false;
  }

  //get trip data frpm server.js API implementation
  const data = await callAPI(city.value, dateElement.value);
  activeTrip = { ...data };
  renderUI(data); // render the returned data to webpage
  saveButton.disabled = false;
});

saveButton.addEventListener("click", e => {
  saveTrip(e, activeTrip); // event handler for saveTrip button
});

removeButton.addEventListener("click", e => {
  removeTrip(e); // event handlet for removeTrip button
});
