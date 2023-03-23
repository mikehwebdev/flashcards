import { useState } from "react"

export default function Flashcard(props){

    const [revealAnswer, setRevealAnswer] = useState(false)

    function nextQuestion(){
        setRevealAnswer(false)
        setTimeout(()=>{
            props.handleClick()
    },750)}

    return (
        <>
        <h2 className="question">{props.question}</h2>
        <div className={!revealAnswer ? "answer-elements": "revealed"}>{props.answer}</div>
        {!revealAnswer && <button onClick={()=> setRevealAnswer(true)}>Reveal answer</button>}
        {revealAnswer && <button onClick={nextQuestion}>Next question</button>}

        </>
    )
}