import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function WelcomePage() {
  const [name, setName] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the user's name to the state
    // You can also save the name to localStorage or a cookie if you want to persist it
    setName(event.target.name.value);
    // Navigate to the game/quiz page
    history.push('/game');
  };

  return (
    <div>
      <h1>Welcome to the Game/Quiz</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Please enter your name:
          <input type="text" name="name" />
        </label>
        <button type="submit">Start the Game/Quiz</button>
      </form>
    </div>
  );
}

export default WelcomePage;
