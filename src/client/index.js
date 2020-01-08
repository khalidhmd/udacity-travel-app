import { callAPI, renderResult } from "./js/app";
import "./styles/style.scss";

const urlText = document.getElementById("url");
const form = document.getElementById("form");

form.addEventListener("submit", async event => {
  event.preventDefault();
  var x = document.forms["form"]["url"].value;
  if (x == "") {
    alert("Url must be filled out");
    return false;
  }
  const data = await callAPI(urlText.value);
  renderResult(data);
});
