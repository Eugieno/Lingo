import 'bulma/css/bulma.min.css';
import GameSettings from './components/GameSettings';
// import WelcomePage 
import WelcomePage from './components/WelcomePage';
// import RenderQuestiions 
import RenderQuestions from './components/RenderQuestions';
// import DisplayScore
import DisplayScore from './components/DisplayScore';
// import Highscore
import HighScoreBoard from './components/HighScoreBoard';

const App = () => {
  // create and monitor state variables
  // 1. Username from welcome page 
  // 2. Choices on form field
  // 3. Final score ( to be logged to LS)

  //Pass props to the child components


      return (
        <><WelcomePage/>
        <GameSettings/>
        <RenderQuestions/>
        <DisplayScore/>
        <HighScoreBoard/>
        </>
          

      
      )
  }
  
export default App;