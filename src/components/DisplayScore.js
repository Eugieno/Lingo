import { useState,useEffect } from "react";
import HighScoreBoard from "./HighScoreBoard";
import useLocalStorageState from 'use-local-storage-state'
import 'bulma/css/bulma.min.css';

export default function DisplayScore ({score, arrayLength, restartGame, theme}) {
    const [userName, updateUserName] = useState();
    const [showLeaderboard, setLeaderboard] = useState(false);
    const [nameAndScore, setNameAndScore] = useLocalStorageState("topScores", {
        defaultValue: []
    });
    const [scoreList, setScoreList] = useState()
    
    console.log(score)

    const onClick = (e) => {       
        updateUserName("")
        setNameAndScore([...nameAndScore, [userName, score]])
       
        // control for navigating to highscore board
        setLeaderboard(!showLeaderboard)
        console.log(!showLeaderboard)

        
    }

    window.onstorage = () => {
        // When local storage changes, dump the list to
        // the console.
        console.log(JSON.parse(window.localStorage.getItem("topScores")));
        setScoreList(JSON.parse(window.localStorage.getItem("topScores")));
        console.log(scoreList)
      };

    useEffect(()=> {
        // setScoreList(scoreList)
        console.log("Highscore list initialised!")


    },[nameAndScore])
    
    
return (
    // Using boolean - single page compliant
    <section className="section">
        {showLeaderboard ? (<HighScoreBoard theme = {theme} scoreList={scoreList}/>) : 
        <section className="final-result section">
            <h1>Final Result</h1>
            <h2> You scored {score} out of {arrayLength} - {(score/arrayLength)*100}%</h2>
            <button style={{marginRight:20,marginBottom:10}} onClick={restartGame} className="restart-game is-responsive">Restart Game</button>
            <button style={{marginRight:20}} onClick={onClick} className="restart-game is-responsive">Save to scoreboard</button>
            <div style={{margin:15}}>
            <label ><strong><em >Enter your name: </em></strong></label>
                <input value ={userName}className="name-entry is-rounded" onChange={(e)=> updateUserName(e.target.value)} placeholder="Name"></input>
            </div>
        </section>
        }
    </section>)




}
