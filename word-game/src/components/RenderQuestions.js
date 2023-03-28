import TimeBoundQuiz from "./TimeBoundQuiz";
import TimelessQuiz from "./TimelessQuiz";
import { useState } from "react";
import "./renderQ.css";




export default function RenderQuestions ({diff, testArea, objResponse,timed}) {
    
    
    
      
    return (
        <div>
            
            <TimelessQuiz objResponse={objResponse}/>
            {/* {timed? <TimeBoundQuiz resObject={questionBank} />:<TimelessQUiz resObject={questionBank}/>} */}
           
        </div>
    )
}

