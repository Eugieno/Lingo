import { useState } from "react"
import { mockObject } from "../utils/mockObject";
import { correct,wrong,greenLight} from "../utils/answerchecker";
import DisplayScore from "./DisplayScore";




export default function TimelessQuiz({objResponse}) {
   
    const [QuestIndex, setQuestIndex] = useState(0);
    const [showFinalResult, setFinalresult] = useState(false);
    const [score, setScore] = useState(0);
    const [wrongAns, updateWrongAns] = useState([])

    // const objResponse = mockObject.quizlist;
    // const pokeName = objResponse[0].quiz[0];



    const handleNextQuestion = () => {
        const nextQuestion = QuestIndex + 1;
        setQuestIndex(nextQuestion);
    }
    const restartGame = () => {
        setScore(0);
        setFinalresult(false);
        setQuestIndex(0)
        
    }

   
    const handleAnswerCheck = (e) => {
        if (e.target.getAttribute('data-key').toString() === objResponse[QuestIndex].correct.toString()) {
            correct();
            
            setScore(score + 1);
    
            console.log("Right!")
        } else {
            wrong()
            console.log("Wrong!")
           
            // collecting all wrong answers and updating them in an object
            // const currentWrongAns = e.target.innerText.trim()

            // updateWrongAns([...wrongAns,...currentWrongAns])
        }

        if (QuestIndex + 1 < objResponse.length) {
            setQuestIndex(QuestIndex + 1 )
        } else {
            setFinalresult(true);
        }
        // console.log(e.target.getAttribute('data-key'))
        
    
    }
   console.log("This is a Response from the API",JSON.stringify(objResponse))
    return (
        // <h1>{pokeName}</h1>    // For testing poke API
        <div className="question-cardCont">
            {/* Header  */}
            <h1>Lingo</h1>
            {/* <h1>{pokeName}</h1> */}
            {/* Current score  */}
            <h2>Current score: {score}</h2>
        
            {showFinalResult? (
            // Final Result
            <DisplayScore restartGame={restartGame} score={score} arrayLength={objResponse.length}/>
            // <div className="final-result">
            //     <h1>Final Result</h1>
            //     <h2> You scored {score} out of {objResponse.length} - {(score/objResponse.length)*100}%</h2>
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
                <h2> Question {QuestIndex + 1} out of {objResponse.length}</h2>
                <h3 className="question-text">{objResponse[QuestIndex].quiz[0]}, {objResponse[QuestIndex].quiz[1]},{objResponse[QuestIndex].quiz[2]}</h3>
                <ul className="quiz-options-ul">
                    <li className="quiz-option-li" onClick={handleAnswerCheck} data-key="1">{objResponse[QuestIndex].option[0]}</li>
                    <li className="quiz-option-li" onClick={handleAnswerCheck} data-key={2}>{objResponse[QuestIndex].option[1]}</li>
                </ul>
            </div>)}

        </div>
    )
}