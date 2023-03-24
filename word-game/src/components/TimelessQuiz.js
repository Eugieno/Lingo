import { useState } from "react"


export default function TimelessQuiz({resObject}) {
    const [i, seti] = useState(0);

    const handleNextQuestion = () => {
        const nextQuestion = i + 1;
        seti(nextQuestion);
    }

    const handleAnswerCheck = () => {
        // if correct good sound
            // correct()
        // else X sound
            // wrong()
    }

    return (
        <>
            <p>{i+1}: {resObject[i].quiz[0]}, {resObject[i].quiz[1]}, {resObject[i].quiz[2]}</p>
            <button onClick={handleAnswerCheck}>{resObject[i].option[0]}</button>
            <button onClick={handleAnswerCheck}>{resObject[i].option[1]}</button>
            <button onClick={handleNextQuestion}>Next</button>


        </>
    )
 
}