import { useState } from 'react'
import Flashcard from './Flashcard'
import data from './data'
import './App.css'

function App() {

const [startScreen, setStartScreen] = useState(true)
const [flashcard, setFlashcard] = useState('')


function fetchQuestion() {
  setStartScreen(false)
  let randomIndex = Math.floor(Math.random() * data.length )
  console.log(randomIndex)
  setFlashcard(
    <Flashcard 
      question={data[randomIndex].question}
      answer={data[randomIndex].answer.map(answer => <p className='answer'>{answer}</p>)}
      handleClick={fetchQuestion}
    />
  )
}



  return (
    <div className="app">
      <h1>Mike's Web development Study Aid</h1>
{
      startScreen?   
        <div className="start-screen">
            <button onClick={fetchQuestion}>Give me a random card!</button>
        </div>
        :
        <div className='flashcard'>
            {flashcard}
        </div>
}
    </div>
  )
}

export default App
