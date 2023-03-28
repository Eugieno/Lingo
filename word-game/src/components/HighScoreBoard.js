
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function HighScoreBoard() {
//   const [scores, setScores] = useState([]);

//   useEffect(() => {
//     // Fetch scores from backend API or any data source
//     axios.get('/api/scores')
//       .then(response => {
//         // Sort scores in descending order by score value
//         const sortedScores = response.data.sort((a, b) => b.score - a.score);
//         setScores(sortedScores);
//       })
//       .catch(error => {
//         console.error('Error fetching scores:', error);
//       });
//   }, []);

//   return (
//     <section className="section">
//       <div className="container">
//         <h1 className="title">High Score Board</h1>
//         <ul className="list is-hoverable">
//           {scores.map(score => (
//             <li key={score.id} className="list-item">
//               <div className="columns">
//                 <div className="column is-three-quarters">
//                   <span className="has-text-weight-bold">{score.name}</span>
//                 </div>
//                 <div className="column">
//                   <span>{score.score}</span>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default HighScoreBoard;

import React from 'react';
import { Ol, Li } from 'react-html';
import 'bulma/css/bulma.min.css';
const HighScoreBoard = ({ users }) => {
  // Sort users by score in descending order
  const sortedUsers = [...users].sort((a, b) => b.score - a.score);
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">High Scores</h1>
        <Ol className="list is-hoverable">
          {sortedUsers.map(user => (
            <Li className="list-item" key={user.id}>
              {user.name}: {user.score}
            </Li>
          ))}
        </Ol>
      </div>
    </section>
  );
};
export default HighScoreBoard;



/*function HighScoreBoard({ users, userName }) {
  const sortedUsers = [...users].sort((a, b) => b.score - a.score);
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">High Scores - {userName}</h1>
        <ol className="list is-hoverable">
          {sortedUsers.map((user) => (
            <li className="list-item" key={user.id}>
              {user.name}: {user.score}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function printHighscores() {
  // getting score from highscores logic.js location
  let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  // sorting scores by decending order
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function (score) {
    // creat li tag for the score and user name
    let liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    // display the order list in highscores div
    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}
// for clearing function to remove the scores
function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;
// for when page loads
printHighscores();