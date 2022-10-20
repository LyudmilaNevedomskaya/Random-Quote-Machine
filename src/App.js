import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSquareNfi, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  const [quote, setQuote] = useState({
    content: 'You become what you believe.',
    author: 'Oprah Winfrey'
  })
  return (
    <main className='main-container'>
      <div id='quote-box'>
        <p id='text'><FontAwesomeIcon icon={faQuoteLeft} /> {quote.content}</p>
        <p id='author'>- {quote.author}</p>
        <div className='social-button-container'>
          <div className='social-container'>
            <a id='tweet-quote' href='https://twitter.com/intent/tweet' target="_blank" ><FontAwesomeIcon icon={faSquareNfi} /></a>
            <a href='https://twitter.com/intent/tweet' target="_blank"><FontAwesomeIcon icon={faCoffee} /></a>
          </div>
          <button id='new-quote'>New Quote</button>
        </div>
      </div>
      <span>by Mila</span>
    </main>
  );
}

export default App;
