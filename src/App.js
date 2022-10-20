import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPoo, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import './App.css';

const colors = ['#E0144C', '#FF5858', '#3C4048', '#815B5B', '#3F0071', '#150050', '#FF731D', '#628E90', '#905E96', '#DD5353', '#372948', '#38E54D', '#2192FF', '#FF74B1'];

function App() {
  const [quote, setQuote] = useState({
    content: 'You become what you believe.',
    author: 'Oprah Winfrey'
  })
  const [color, setColor] = useState('#395144')

  const getRandomColor = (colorsArr) => {
    const res = colorsArr[Math.floor(Math.random() * colorsArr.length)]
    return res;
  }

  const handleClick = async () => {
    try {
      const data = await (await fetch(`https://zenquotes.io/api/random`)).json()
      console.log(data)
      setQuote({ content: data[0].q, author: data[0].a })

      setColor(getRandomColor(colors))
    } catch (err) {
      console.log('ERROR', err.message)
    }
  }

  return (
    <div style={{ background: color }} className='wrapper'>
      <main style={{ background: color }} className='main-container'>
        <div id='quote-box'>
          <p style={{ color: color }} id='text'><FontAwesomeIcon icon={faQuoteLeft} /> {quote.content}</p>
          <p style={{ color: color }} id='author'>- {quote.author}</p>
          <div className='social-button-container'>
            <div className='social-container'>
              <a style={{ color: color }} id='tweet-quote' href='https://twitter.com/intent/tweet' target="_blank" ><FontAwesomeIcon icon={faHeart} /></a>
              <a style={{ color: color }} href='https://twitter.com/intent/tweet' target="_blank"><FontAwesomeIcon icon={faPoo} /></a>
            </div>
            <button style={{ background: color }} id='new-quote' onClick={handleClick}>New Quote</button>
          </div>
        </div>
        <span>by Mila</span>
      </main>
    </div>
  );
}

export default App;
