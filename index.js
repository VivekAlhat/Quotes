const data = require("./data/quotes.json");

const len = data.length;

function random() {
  return Math.floor(Math.random() * len) + 1;
}

module.exports.getQuote = () => {
  return data[random()].quote;
}

module.exports.getAll = () => {
  return data;
}

module.exports.getByAuthor = (author) => {
  return data.find(quote => {
    return quote.author = author;
  })
}