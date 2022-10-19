import { useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState({
    content: 'You become what you believe.',
    author: 'Oprah Winfrey'
  })
  return (
    <main className='main-container'>
      <div id='quote-box' className="App">
        <p>{quote.content}</p>
        <p>- {quote.author}</p>
        <div>
          <a>twitter</a>
          <a>tumblr</a>
        </div>
        <button>New Quote</button>
      </div>
      <span>by Mila</span>
    </main>
  );
}

export default App;
