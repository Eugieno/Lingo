import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react'
import 'bulma/css/bulma.min.css';
import GameSettings from './components/GameSettings';
import WelcomePage from './components/WelcomePage';
import RenderQuestions from './components/RenderQuestions';
// import DisplayScore from './components/DisplayScore';
// import HighScoreBoard from './components/HighScoreBoard';
import doRequest from './utils/API';
import TimelessQuiz from './components/TimelessQuiz';
import DisplayScore from './components/DisplayScore';



const App = () => {
  // const [username, SetUsername] = useState('');
//  Monitoring variables from the game settings
  const [formData, setFormData] = useState({
    testType: "overall",
    difficulty: 1,
    numOfQuestion: ""
  });
  // To manage API object returned 
  const [objResponse, setObjResponse] = useState({});
  
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

// Updates the isTimed data on this App component
 const handleTimerUpdate = (e) => {
  const newIsTimed = e.target.value;
  setIsTimed(newIsTimed);

  console.log(newIsTimed);
  

 }

//  Triggers API call - on click of start quiz button in game settings component

// Example of useEffect
  // useEffect(() => {
    
  //   doRequest(formData.difficulty, formData.testType).then(data => {
  //     console.log(data) 
  //     setObjResponse(prevObj => ({...prevObj,...data}))        
  //     console.log(objResponse)  
  //   })},[])

// Real Call of API - Example of event handler
//  const handleStartQuiz = () => {
    
//     doRequest(formData.difficulty, formData.testType).then(data => {
//       console.log(data) // Log to console: success
//       // let clonedData = Object.assign({}, data); // Log to console: success
//       // update objrResponse state
     
      
//       setObjResponse(prevObj => ({...prevObj,...data}))
//       // setObjResponse({...objResponse, quizlist:clonedData.quizlist});   //problem: setObjResponse isn't updating objResponse state variable on the App component so I can't use the API response in the render component, hence the undefined error. 
    
//       console.log(objResponse)  // returns an object with an empty quizlist array. Simply logs the default state.

      
//     })
//   }
  // const handleUpdateAPI = ()=> {
  //   doRequest().then(data => {
  //     console.log(data)
  //     setObjResponse(prevObj => ({...prevObj,...data}))
  //     console.log(objResponse) 
    
  //   })

  // }
 useEffect(()=> {
  doRequest().then(data => {
    console.log(data)
    setObjResponse(prevObj => ({...prevObj,...data}))
    console.log(objResponse) 
      
  })
 },[])
  // Mock API
  const handleStartQuiz = (e) => {
    
    doRequest().then(data => {
      console.log(data) // Log to console: success
      // let clonedData = Object.assign({}, data); // Log to console: success
      // update objrResponse state
     
      
  
      setObjResponse(prevObj => ({...prevObj,...data}))
      // setObjResponse({...objResponse, quizlist:clonedData.quizlist});   //problem: setObjResponse isn't updating objResponse state variable on the App component so I can't use the API response in the render component, hence the undefined error. 

      console.log(objResponse)  // returns an object with an empty quizlist array. Simply logs the default state.

  
    })
  }

 
      return (
        // <DisplayScore/>
        <TimelessQuiz/>
        // <Router>
        // <>
        // <Routes>
        //   <Route path= "/"  element={<WelcomePage />}/>
        //   <Route path= "settings" element={<GameSettings onQuizStart={handleStartQuiz} onFormFieldChange={handleFormFieldChange} onTimerOption={handleTimerUpdate}/>}/>
        //   <Route path = "settings/questions" element={<RenderQuestions APIresponse ={objResponse} timed={isTimed} diff= {formData.difficulty} testArea={formData.testType} />}/>
        //   {/* <Route path="*" element={<p>Path not resolved</p>} /> */}
        //   {/* <Route path = "highscoreBoard" element = {<HighScoreBoard/>}/> */}

        // </Routes>
        
        // </>
        // </Router>
      )
  }


export default App;

