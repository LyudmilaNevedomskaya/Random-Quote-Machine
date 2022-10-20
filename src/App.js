import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPoo, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import './App.css';

const colors = ['#E0144C', '#FF5858', '#3C4048', '#815B5B', '#3F0071', '#150050', '#FF731D', '#628E90', '#905E96', '#DD5353', '#372948', '#38E54D', '#2192FF', '#FF74B1'];

function App() {
  const [quote, setQuote] = useState({
    content: '',
    author: ''
  })
  const [color, setColor] = useState('#395144')
 
  const getRandomColor = (colorsArr) => {
    const res = colorsArr[Math.floor(Math.random() * colorsArr.length)]
    return res;
  }



  const getQuote = async () => {
    try {
      //const data = await fetch(`https://zenquotes.io/api/random`).json()
      const res = await fetch(`https://type.fit/api/quotes`)
      const data = await res.json()
      const quoteToDisplay = data[Math.floor(Math.random()*data.length)]
      console.log('ALL',data)
      console.log('ONE',quoteToDisplay)
      setQuote({ content: quoteToDisplay.text, author: quoteToDisplay.author })

      setColor(getRandomColor(colors))
    } catch (err) {
      console.log('ERROR', err.message)
      setQuote({ content: 'An Error occured while getting a quote', author: 'Try Again' })
      setColor('red')
    }
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div style={{ background: color }} className='wrapper'>
      <main style={{ background: color }} className='main-container'>
        <div id='quote-box'>
          <p style={{ color: color }} id='text'><FontAwesomeIcon icon={faQuoteLeft} /> {quote.content}</p>
          <p style={{ color: color }} id='author'>- {quote.author}</p>
          <div className='social-button-container'>
            <div className='social-container'>
              <a style={{ color: color }} id='tweet-quote' href='https://twitter.com/intent/tweet' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faHeart} /></a>
              <a style={{ color: color }} href='https://twitter.com/intent/tweet' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faPoo} /></a>
            </div>
            <button style={{ background: color }} id='new-quote' onClick={getQuote}>New Quote</button>
          </div>
        </div>
        <span>by Mila</span>
      </main>
    </div>
  );
}

export default App;
