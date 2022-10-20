import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSquareNfi, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  const [quote, setQuote] = useState({
    content: 'You become what you believe.',
    author: 'Oprah Winfrey'
  })
  return (
    <main className='main-container'>
      <div id='quote-box' className="App">
        <p id='text'><FontAwesomeIcon icon={faQuoteRight} /> {quote.content}</p>
        <p id='author'>- {quote.author}</p>
        <div>
          <a><FontAwesomeIcon icon={faSquareNfi} /></a>
          <a><FontAwesomeIcon icon={faCoffee} /></a>
        </div>
        <button id='new-quote'>New Quote</button>
      </div>
      <span>by Mila</span>
    </main>
  );
}

export default App;
