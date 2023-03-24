import TimeBoundQuiz from "./TimeBoundQuiz";
import TimelessQUiz from "./TimelessQuiz";

export default function RenderQuestions ({APIresponse,timed}) {

    const questionBank = {APIresponse};
      

    
    return (
        <>
            {timed? <TimeBoundQuiz resObject={questionBank} />:<TimelessQUiz resObject={questionBank}/>}
        </>
    )
}









// Task/Features - To create a component that renders MCQ. 
// This component will send API request to Word Quiz API, and the questions and corressponding choices returned within JSX tags.

// Programming Logic of <Renderuestions> component
// The type of questions rendered will be based on user's choice of test: (TOEFL), (GMAT) from <GameSettings/> component
// The number of questions rendered will be dictated by user's input from <GameSettings/> component.
// The questions rendered will be in accordance to user's choice of difficulty level from <GameSettings/> component
// The questions rendered will be made random as much as possible
// The questions will be time bound or timeless depending on user's choice in <GameSettings/> component.
    // Time based rendering:
        // Quiz stops after the allotted time reaches zero
        // User is taken to the next page: <DisplayScore/> once timer reaches zero.
        // The final score is transferred unto the next component:<DisplayScore/>  for display.
    // Timeless rendering:
        // A next button provided for user to navigate between questions
        // A submit button at the end, which when clicked, takes the user to the <DisplayScore/>.

// PSEUDOCODES
// construct a function component
// import useState
