const polarity = document.getElementById('polarity')
const subjectivity = document.getElementById('subjectivity')
const text = document.getElementById('text')
const pconfidence = document.getElementById('pconfidence')
const sconfidence = document.getElementById('sconfidence')

const renderResult = (data) => {
  polarity.innerText = data.polarity
  subjectivity.innerText = data.subjectivity
  text.innerText = data.text
  pconfidence.innerText = data['polarity_confidence']
  sconfidence.innerText = data['subjectivity_confidence']
}

export { renderResult }
