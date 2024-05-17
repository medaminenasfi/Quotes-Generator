import React, { useState } from 'react';
import './randomQuote.css';
import generate_icon from '../Assets/983901.png';

export const RandomQuote = () => {
  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("http://type.fit/api/quotes");
    quotes = await response.json();
  }


  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  }

loadQuotes();

  return (
    <div className="Container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(',')[0]}</div>
          <div className="icons">
            <img src={ generate_icon} onClick={() => { random() }} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
