import { useState } from "react"
// import { mockObject } from "../utils/mockObject";
import { correct,wrong} from "../utils/answerchecker";
import DisplayScore from "./DisplayScore";
import 'bulma/css/bulma.min.css';
import ReactSwitch from "react-switch";
import Icon from '@mdi/react';
import { mdiHomeCircle } from '@mdi/js';
import { Link } from 'react-router-dom';


export default function TimelessQuiz({theme,toggleTheme,objResponse}) {   ///removed se from response to use mock
   
    const [QuestIndex, setQuestIndex] = useState(0);
    const [showFinalResult, setFinalresult] = useState(false);
    const [score, setScore] = useState(0);

    // const objResponse = mockObject.quizlist;
    
       
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
        
        }

        if (QuestIndex + 1 < objResponse.length) {
            setQuestIndex(QuestIndex + 1 )
        } else {
            setFinalresult(true);
        }
        
        
    
    }
   console.log("This is a Response from the API",JSON.stringify(objResponse))

    return (
       
        <section  className="question-cardCont ">
            {/* Header  */}
            <h1 className='lingo' style={{color: "black"}}>
              <p style={{color: "blue", display: "inline"}}>L</p>
              <p style={{color: "green", display: "inline"}}>I</p>
              <p style={{color: "red", display: "inline"}}>N</p>
              <p style={{color: "yellow", display: "inline"}}>G</p>
              <p style={theme ==="light"? {color: "black", display: "inline"}:{color: "white", display: "inline"}}>O:</p>
            </h1>
        
            {/* Current score  */}
            <h2 className="current-score">Current score: {score}</h2>
            
            <div id = "theme-toggle" className="theme-toggle">
            <label className="toggle-label">{theme ==="light"? "Light Mode": "Dark Mode"}</label>
                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>

            <div style={theme==="light"? {position: "fixed",top: 0,right: 0, padding:5, margin:5, color:"black"}:{position: "fixed",top: 0,right: 0, padding:5, margin:5, color:"white"}}>
              <Icon path={mdiHomeCircle} size={2} />
            </div>

            <Link to="/">
            <div style={theme==="light"? {position: "fixed",top: 0,right: 0, padding:5, margin:5, color:"black"}:{position: "fixed",top: 0,right: 0, padding:5, margin:5, color:"white"}}>
                  <Icon path={mdiHomeCircle} size={2} />
                </div>
            </Link>
             
            {showFinalResult? (
            // Final Result
            <DisplayScore restartGame={restartGame} theme = {theme} score={score} arrayLength={objResponse.length}/>
            ) : (
            // Question Card
            <section className="question-card section">
                <h2> Question {QuestIndex + 1} out of {objResponse.length}</h2>
                <h3 className="question-text">{objResponse[QuestIndex].quiz[0].toUpperCase()} | {objResponse[QuestIndex].quiz[1].toUpperCase()} | {objResponse[QuestIndex].quiz[2].toUpperCase()}</h3>
                <ul className="quiz-options-ul">
                    <li className="quiz-option-li" onClick={handleAnswerCheck} data-key="1">{objResponse[QuestIndex].option[0].toUpperCase()}</li>
                    <li className="quiz-option-li" onClick={handleAnswerCheck} data-key={2}>{objResponse[QuestIndex].option[1].toUpperCase()}</li>
                </ul>
            </section>)}

        </section>
    )
}



