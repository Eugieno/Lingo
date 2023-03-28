import { useState,useEffect } from "react";
import HighScoreBoard from "./HighScoreBoard";
import useLocalStorageState from 'use-local-storage-state'

import React from "react";
import { Link } from "react-router-dom";
import HighScoreBoard from "./HighScoreBoard"; 
// how to use the scores from the above to populate the displayscore component?


<<<<<<< HEAD
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
=======

export default function DisplayScore(props) {
  let score = props.score;
  return (
    <>
      <section style={{backgroundColor: "#f2f2f2", padding: "20px"}}>
        <div style={{maxWidth: "800px", margin: "0 auto"}}>
          <h1 style={{color: "#333", fontSize: "36px"}}>Your Final Score is {score}</h1>
          <h2 style={{color: "#666", fontSize: "24px"}}>Click below to view your score on the leader board!</h2>
        </div>
      
        <div style={{maxWidth: "800px", margin: "20px auto 0 auto"}}>
          <button style={{backgroundColor: "#4285F4", color: "#fff", border: "none", padding: "10px 20px", marginRight: "20px", borderRadius: "4px"}}>Score Board</button> 
          {/* will need to add a link to the score board */}
          <button style={{backgroundColor: "#DB4437", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "4px"}}>View Lexicon</button>
          {/* will need to add a link to the lexicon */}
        </div>
      </section>

    </>
  );
}

>>>>>>> 964ea89863a7ecf95aaf4eb5a49cb941e2e84a12
