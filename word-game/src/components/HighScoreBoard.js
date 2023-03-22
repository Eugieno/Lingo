
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HighScoreBoard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Fetch scores from backend API or any data source
    axios.get('/api/scores')
      .then(response => {
        // Sort scores in descending order by score value
        const sortedScores = response.data.sort((a, b) => b.score - a.score);
        setScores(sortedScores);
      })
      .catch(error => {
        console.error('Error fetching scores:', error);
      });
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">High Score Board</h1>
        <ul className="list is-hoverable">
          {scores.map(score => (
            <li key={score.id} className="list-item">
              <div className="columns">
                <div className="column is-three-quarters">
                  <span className="has-text-weight-bold">{score.name}</span>
                </div>
                <div className="column">
                  <span>{score.score}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HighScoreBoard;
