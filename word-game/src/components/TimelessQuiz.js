import { useState } from "react"
import { mockObject } from "../utils/mockObject";
import { correct,wrong } from "../utils/answerchecker";
import DisplayScore from "./DisplayScore";



export default function TimelessQuiz({resObject}) {
   
    const [QuestIndex, setQuestIndex] = useState(0);
    const [showFinalResult, setFinalresult] = useState(false);
    const [score, setScore] = useState(0);
    const [wrongAns, updateWrongAns] = useState([])

    const questionArray = mockObject.quizlist;
    // const pokeName = resObject.results[0].name



    const handleNextQuestion = () => {
        const nextQuestion = QuestIndex + 1;
        setQuestIndex(nextQuestion);
    }
    const restartGame = () => {
        setScore(0);
        setFinalresult(false);
        setQuestIndex(0)
        updateWrongAns([])
    }

   
    const handleAnswerCheck = (e) => {
        if (e.target.getAttribute('data-key').toString() === questionArray[QuestIndex].correct.toString()) {
            // correct();
            setScore(score + 1);
            console.log("Right!")
        } else {
            // wrong()
            console.log("Wrong!")
            // collecting all wrong answers and updating them in an object
            const currentWrongAns = e.target.innerText.trim()
            // let currentWrongAns;
            // QuestIndex + 1 < questionArray.length ? currentWrongAns = JSON.stringify(e.target.innerText) + "," : JSON.stringify(e.target.innerText)
        
            // console.log(JSON.stringify(e.target.innerText))
            updateWrongAns([...wrongAns,...currentWrongAns])
        }

        if (QuestIndex + 1 < questionArray.length) {
            setQuestIndex(QuestIndex + 1 )
        } else {
            setFinalresult(true);
        }
        // console.log(e.target.getAttribute('data-key'))
        // console.log(parseInt(questionArray[QuestIndex].correct))
        
    }
   console.log(resObject)
    return (
        // <h1>{pokeName}</h1>    // For testing poke API
        <div className="question-cardCont">
            {/* Header  */}
            <h1> Word Quiz</h1>
            {/* Current score  */}
            <h2>Current score: {score}</h2>
        
            {showFinalResult? (
            // Final Result
            <DisplayScore restartGame={restartGame} score={score} arrayLength={questionArray.length}/>
            // <div className="final-result">
            //     <h1>Final Result</h1>
            //     <h2> You scored {score} out of {questionArray.length} - {(score/questionArray.length)*100}%</h2>
            //     <button onClick={restartGame} className="restart-game">Restart Game</button>
            //     {/* <button onClick={saveToLocal} className="restart-game">Save to scoroard</button> */}
            //     {/* List of wrong words */}
            //     <div>
            //         {wrongAns.map((missed) => 
            //             <button>{missed}</button>
            //         )}
            //     </div>

            // </div>
            ) : (
            // Question Card
            <div className="question-card">
                <h2> Question {QuestIndex + 1} out of {questionArray.length}</h2>
                <h3 className="question-text">{questionArray[QuestIndex].quiz[0]}, {questionArray[QuestIndex].quiz[1]},{questionArray[QuestIndex].quiz[2]}</h3>
                <ul className="quiz-options-ul">
                    <li className="quiz-option-li" onClick={handleAnswerCheck} data-key="1">{questionArray[QuestIndex].option[0]}</li>
                    <li className="quiz-option-li" onClick={handleAnswerCheck} data-key={2}>{questionArray[QuestIndex].option[1]}</li>
                </ul>
            </div>)}

        </div>
    )
}