const quotes = [
{
  quotes: "Success is counted sweetest by those who ne'er succeed.",
  author: "Emily Dickinson"
},
{
  quotes: "Someone's sitting in the shade today because someone planted a tree a long time ago.",
  author: "Warren Buffett"
},
{
  quotes: "Weakness of attitude becomes weakness of character.",
  author: "Albert Einstein"
},
{
  quotes: "Use what you have to run toward your best - that's how I now live my life.",
  author: "Oprah Winfrey"
},
{
  quotes: "Try not to become a man of success but rather try to become a man of value.",
  author: "Albert Einstein"
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;