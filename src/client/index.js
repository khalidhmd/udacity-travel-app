import { callAPI, renderUI } from "./js/app";
import "./styles/style.scss";

const form = document.getElementById("form");
const dateElement = document.getElementById("date");
const d = new Date();
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
  const data = await callAPI(city.value, dateElement.value);
  console.log(data);
  renderUI(data);
});
