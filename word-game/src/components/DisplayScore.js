
import React from "react";
import { Link } from "react-router-dom";
import HighScoreBoard from "./HighScoreBoard"; 
// how to use the scores from the above to populate the displayscore component?



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

