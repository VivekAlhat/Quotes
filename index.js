const data = require("./data/quotes.json");

var len = data.length;

function random() {
  return Math.floor(Math.random() * len) + 1;
}

function getQuote() {
  return data[random()].quote;
}

module.exports.getQuote = getQuote;
