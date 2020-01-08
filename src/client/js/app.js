const polarity = document.getElementById("polarity");
const subjectivity = document.getElementById("subjectivity");
const text = document.getElementById("text");
const pconfidence = document.getElementById("pconfidence");
const sconfidence = document.getElementById("sconfidence");

const renderResult = data => {
  polarity.innerText = data.polarity;
  subjectivity.innerText = data.subjectivity;
  text.innerText = data.text;
  pconfidence.innerText = data["polarity_confidence"];
  sconfidence.innerText = data["subjectivity_confidence"];
};

const axios = require("axios");
async function callAPI(url) {
  const baseUrl = "http://localhost:8080/test?url=";
  try {
    const response = await axios.get(`${baseUrl}${url}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export { callAPI, renderResult };
