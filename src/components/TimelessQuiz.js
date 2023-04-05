import { useEffect, useState } from "react"
import { mockObject } from "../utils/mockObject";
import { correct,wrong} from "../utils/answerchecker";
import DisplayScore from "./DisplayScore";
import 'bulma/css/bulma.min.css';
import ReactSwitch from "react-switch";
import Icon from '@mdi/react';
import { mdiHomeCircle } from '@mdi/js';
import { Link } from 'react-router-dom';
import { useRef } from "react";
import timeValueforTest from "../utils/timeValueforTest";


export default function TimelessQuiz({theme,toggleTheme, isTimed, difficulty, objResponse}) {   ///removed se from response to use mock
   
    const [QuestIndex, setQuestIndex] = useState(0);
    const [showFinalResult, setFinalresult] = useState(false);
    const [score, setScore] = useState(0);

    // Conditional for time value of test based on test difficulty
    const seconds = timeValueforTest(difficulty);

    const [timeLeft, setTimeLeft] = useState(seconds);
    const intervalRef = useRef(); // Add a ref to store the interval id



    // const objResponse = mockObject.quizlist;



    useEffect(() => {
      if (isTimed === "false") return; //early exit
      intervalRef.current = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
      return () => clearInterval(intervalRef.current);
    }, []);

    // Add a listener to `timeLeft`
    useEffect(() => {
      if (timeLeft <= 0) {
        clearInterval(intervalRef.current);
        setFinalresult(true)
      }
    }, [timeLeft]);
  

    // Handle Restart game event   
    const restartGame = () => {
        setScore(0);
        setFinalresult(false);
        setQuestIndex(0)
        if (isTimed === "true") {
          setTimeLeft(seconds);
          intervalRef.current = setInterval(() => {
            setTimeLeft((t) => t - 1);
          }, 1000);
          return () => clearInterval(intervalRef.current);
        }
        
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
            setTimeLeft(0);
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

            {/* Home Icon */}
            <Link to="/"></Link>

            <div onClick={() => {
              window.location.href = "/"
            }} style={theme==="light"? {position: "fixed",top: 0,right: 0, padding:5, margin:5, color:"black", cursor: "pointer"}:{position: "fixed",top: 0,right: 0, padding:5, margin:5, color:"white", cursor: "pointer"}}>
                  <Icon path={mdiHomeCircle} size={2} />
                </div>

            {/* Timer counter */}
            {isTimed === "true" &&
             <div ><strong style={theme==="light"? {position: "fixed",top: 0,left: 0, padding:5, margin:15, color:"black", fontSize:30}:{position: "fixed",top: 0,left: 0, padding:5, margin:15, color:"white", fontSize:30}}>{timeLeft}</strong></div>}
           
            
             
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



