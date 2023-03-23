import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import 'bulma/css/bulma.min.css';
import GameSettings from './components/GameSettings';
import WelcomePage from './components/WelcomePage';
import RenderQuestions from './components/RenderQuestions';
import DisplayScore from './components/DisplayScore';
// import HighScoreBoard from './components/HighScoreBoard';


const App = () => {
  const [username, SetUsername] = useState('');
  const [formData, setFormData] = useState({
    testType: "",
    difficulty: 0,
    numOfQuestion: 0
  });

  // 3. Final score ( to be logged to LS)
  const [score, setScore] = useState();

  //Pass props to the child components

      return (
        <Router>
        <>
        <Routes>
          <Route path= "/" element={<WelcomePage/>}/>
          <Route path= "settings" element={<GameSettings/>}/>
          <Route path = "questions" element = {<RenderQuestions/>}/>
          {/* <Route path = "highscoreBoard" element = {<HighScoreBoard/>}/> */}

        </Routes>
        
        </>
        </Router>
      )
  }
  
export default App;