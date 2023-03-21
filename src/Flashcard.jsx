import { useState } from "react"

export default function Flashcard(props){

    const [revealAnswer, setRevealAnswer] = useState(false)

    function nextQuestion(){
        setRevealAnswer(false)
        props.handleClick()
    }

    return (
        <>
        <h2 className="question">{props.question}</h2>
        {!revealAnswer && <button onClick={()=> setRevealAnswer(true)}>Reveal answer</button>}
        {!revealAnswer && <button onClick={nextQuestion}>Skip to another question</button>}    
        {revealAnswer && <div className="answer-elements">{props.answer}</div>}
        {revealAnswer && <button onClick={nextQuestion}>Next question</button>}

        </>
    )
}