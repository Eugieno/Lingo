import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'
import 'bulma/css/bulma.min.css';
import GameSettings from './components/GameSettings';
import RenderQuestions from './components/RenderQuestions';
import doRequest from './utils/API';

const App = () => {

//  Monitoring variables from the game settings
  const [formData, setFormData] = useState({
    testType: "overall",
    difficulty: 1,
    numOfQuestion: ""
  });
  // To manage API object returned 
  const [objResponse, setObjResponse] = useState([]);
  
  // To manage user's choice of test (timed or not timed)
  const [isTimed, setIsTimed] = useState(true);

console.log(formData.difficulty)
console.log(formData.testType)


// Updates the formdata on this App component
 const handleFormFieldChange = (e) => {
    let {name, value} = e.target;
    const newFormData = {...formData, [name]:value}
    setFormData(newFormData)
 }

// Updates the isTimed data on this App component - Upcoming integration 
 const handleTimerUpdate = (e) => {
  const newIsTimed = e.target.value;
  setIsTimed(newIsTimed);
  console.log(newIsTimed);
 }

//  Triggers API call - on click of start quiz button in game settings component

// Example of useEffect
  useEffect(() => {
    
    doRequest(formData.difficulty, formData.testType).then(data => {
      console.log(data) 
      setObjResponse(data.quizlist)        
      console.log(objResponse)  
    })},[])

// Real Call of API - Example of event handler
 const handleStartQuiz = () => {
    
    doRequest(formData.difficulty, formData.testType).then(data => {
      console.log(data) // Log to console: success
      
      
      setObjResponse(data.quizlist)
      
      

      
    })
  }


  // const handleUpdateAPI = ()=> {
  //   doRequest().then(data => {
  //     console.log(data)
  //     setObjResponse(prevObj => ({...prevObj,...data}))
  //     console.log(objResponse) 
    
  //   })

  // }
//  useEffect(()=> {
//   doRequest().then(data => {
//     console.log(data)
//     setObjResponse(prevObj => ({...prevObj,...data}))
//     console.log(objResponse) 
      
//   })
//  },[])
  // Mock API
  // const handleStartQuiz = (e) => {
    
  //   doRequest().then(data => {
  //     console.log(data) // Log to console: success
  //     // let clonedData = Object.assign({}, data); // Log to console: success
  //     // update objrResponse state
     
      return (
        <Router>
        <>
        <Routes>
          <Route path= "/" element={<GameSettings onQuizStart={handleStartQuiz} onFormFieldChange={handleFormFieldChange} onTimerOption={handleTimerUpdate}/>}/>
          <Route path = "questions" element={<RenderQuestions objResponse={objResponse} timed={isTimed} diff= {formData.difficulty} testArea={formData.testType} />}/>
        </Routes>
        </>
        </Router>
      )
  }


export default App;

