import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState,useEffect } from 'react'
import 'bulma/css/bulma.min.css';
import GameSettings from './components/GameSettings';
import WelcomePage from './components/WelcomePage';
import RenderQuestions from './components/RenderQuestions';
import DisplayScore from './components/DisplayScore';
// import HighScoreBoard from './components/HighScoreBoard';


const App = () => {
  // const [username, SetUsername] = useState('');
  const [formData, setFormData] = useState({
    testType: "",
    difficulty: "",
    numOfQuestion: ""
  });
console.log(formData.difficulty)
console.log(formData.numOfQuestion)
console.log(formData.testType)

 const handleFormFieldChange = (e) => {
   
    let {name, value} = e.target;
    const newFormData = {...formData, [name]:value}
    setFormData(newFormData)
 }

 
//  useEffect(() => {
//   console.log("Value of Selected diificulty in State is: "+ formData.testType);
// }, [formData.testType,formData.numOfQuestion,formData.difficulty]);

      return (
        <Router>
        <>
        <Routes>
          <Route path= "/" element={<WelcomePage/>}/>
          <Route path= "settings/" element={<GameSettings onFormFieldChange={handleFormFieldChange}/>}/>
          <Route path = "questions" element={<RenderQuestions difficulty={formData.difficulty} typeOfTest={formData.testType} numOfQuest={formData.numOfQuestion}/>}/>
          {/* <Route path="*" element={<p>Path not resolved</p>} /> */}
          {/* <Route path = "highscoreBoard" element = {<HighScoreBoard/>}/> */}

        </Routes>
        
        </>
        </Router>
      )
  }
  
export default App;