// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function WelcomePage({updateAPIstate}) {
//   const [name, setName] = useState('');
//   const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the user's name to the state
    // You can also save the name to localStorage or a cookie if you want to persist it
    // setName(event.target.name.value);
    // Navigate to the game/quiz page
    // history.push('/game');
  };

  return (
   <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}}>
    <h1 style={{color: "black"}}>
      Welcome to&nbsp;
      <p style={{color: "blue", backgroundColor: "grey", display: "inline"}}>L</p>
      <p style={{color: "green", backgroundColor: "grey", display: "inline"}}>I</p>
      <p style={{color: "red", backgroundColor: "grey", display: "inline"}}>N</p>
      <p style={{color: "yellow", backgroundColor: "grey", display: "inline"}}>G</p>
      <p style={{color: "white", backgroundColor: "gray", display: "inline"}}>O:</p>&nbsp;
      the ultimate word association game!
    </h1>
    <button onClick={GameRulesModal} style={{backgroundColor: "skyblue", color: "black", border: "none", padding: "10px", borderRadius: "20px", cursor: "pointer"}}>How to Play</button>
      <form onSubmit={handleSubmit}>
        <label>
          Please enter your name:
          <input type="text" name="name" />
        </label>
        <Link to="settings"><button onClick={updateAPIstate} type="submit">Continue to Game</button></Link>
          </form>
    </div>
  );
}

export default WelcomePage;
