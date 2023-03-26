import { useState } from "react"
import { mockObject } from "../utils/mockObject";
import { correct,wrong } from "../utils/answerchecker";



export default function TimelessQuiz({resObject}) {
   
    const [QuestIndex, setQuestIndex] = useState(0);
    const [showFinalResult, setFinalresult] = useState(false);
    const [score, setScore] = useState(0);

    const questionArray = mockObject.quizlist;



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
        if (e.target.getAttribute('data-key').toString() === questionArray[QuestIndex].correct.toString()) {
            // correct();
            setScore(score + 1);
            console.log("Right!")
        } else {
            // wrong()
            console.log("Wrong!")
        }

        if (QuestIndex + 1 < questionArray.length) {
            setQuestIndex(QuestIndex + 1 )
        } else {
            setFinalresult(true);
        }
        // console.log(e.target.getAttribute('data-key'))
        // console.log(parseInt(questionArray[QuestIndex].correct))
        
    }
//    console.log(resObject)
    return (
        <div className="question-cardCont">
            {/* Header  */}
            <h1> Word Quiz</h1>
            {/* Current score  */}
            <h2>Current score: {score}</h2>
        
            {showFinalResult? (
            // Final Result
            <div className="final-result">
                <h1>Final Result</h1>
                <h2> You scored {score} out of {questionArray.length} - {(score/questionArray.length)*100}%</h2>
                <button onClick={restartGame} className="restart-game">Restart Game</button>
            </div>
            ) : (
            // Question Card
            <div className="question-card">
                <h2> Question {QuestIndex + 1} out of {questionArray.length}</h2>
                <h3 className="question-text">{questionArray[QuestIndex].quiz[0]}, {questionArray[QuestIndex].quiz[1]},{questionArray[QuestIndex].quiz[2]}</h3>
                <ul>
                    <li onClick={handleAnswerCheck} data-key="1">{questionArray[QuestIndex].option[0]}</li>
                    <li onClick={handleAnswerCheck} data-key={2}>{questionArray[QuestIndex].option[1]}</li>
                </ul>
            </div>)}

        </div>
    )
}