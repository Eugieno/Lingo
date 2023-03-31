import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RenderQuestions from './components/RenderQuestions';
import WelcomePage from './components/WelcomePage';
import Rules from "./components/Rules";
import TimelessQuiz from './components/TimelessQuiz';
import GameSettings from './components/GameSettings';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
      <App cup={"full"}/>
</React.StrictMode> 
);


