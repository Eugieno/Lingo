import { useState,useEffect } from "react";
import HighScoreBoard from "./HighScoreBoard";
import useLocalStorageState from 'use-local-storage-state'

// import React from "react";
// import { Link } from "react-router-dom";
// import HighScoreBoard from "./HighScoreBoard"; 
// // how to use the scores from the above to populate the displayscore component?


export default function DisplayScore ({score, arrayLength, restartGame}) {
    const [userName, updateUserName] = useState();
    const [showLeaderboard, setLeaderboard] = useState(false);
    const [nameAndScore, setNameAndScore] = useLocalStorageState("topScores", {
        serializer: []
    });
    const [scoreList, setScoreList] = useState()
    
    console.log(score)

    const onClick = (e) => {       
        updateUserName("")
        setNameAndScore([...nameAndScore, [userName, score]])
       
        // control for navigating to highscore board : single page app
        setLeaderboard(!showLeaderboard)
        console.log(!showLeaderboard)

        // window.location.href = "./HighScoreBoard.js"
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
//     <div className="final-result">
//     <h1>Final Result</h1>
//     <h2> You scored {score} out of {arrayLength} - {(score/arrayLength)*100}%</h2>
//     <button onClick={restartGame} className="restart-game">Restart Game</button>
//     <button onClick={onClick} className="restart-game">Save to scoreboard</button>
//     {/* List of wrong words */}
//     {/* <div>
//         {wrongAns.map((missed) => 
//             <button>{missed}</button>
//         )}
//     </div> */}
//     <div>
//     <label>Enter your name: </label>
//         <input value ={userName}className="name-entry" onChange={(e)=> updateUserName(e.target.value)}></input>
//     </div>
// </div>)

    // Using boolean - single page compliant
    <div>
        {showLeaderboard ? (<HighScoreBoard scoreList={scoreList}/>) : 
            <div className="final-result">
            <h1>Final Result</h1>
            <h2> You scored {score} out of {arrayLength} - {(score/arrayLength)*100}%</h2>
            <button onClick={restartGame} className="restart-game">Restart Game</button>
            <button onClick={onClick} className="restart-game">Save to scoreboard</button>
            {/* List of wrong words */}
            {/* <div>
                {wrongAns.map((missed) => 
                    <button>{missed}</button>
                )}
            </div> */}
            <div>
            <label>Enter your name: </label>
                <input value ={userName}className="name-entry" onChange={(e)=> updateUserName(e.target.value)}></input>
            </div>
        </div>
        }
    </div>)




}
