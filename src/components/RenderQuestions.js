import TimelessQuiz from "./TimelessQuiz";
import { createContext, useState } from "react";
import "./renderQ.css";


export const ThemeContext = createContext(null);

export default function RenderQuestions ({ objResponse,isTimed, difficulty}) {
    const [theme, setTheme] = useState("light");
    
    const toggleTheme = ()=> {
        setTheme((curr) => (curr==="light" ? "dark": "light"))
    }
      
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div id={theme}>
                
                <TimelessQuiz objResponse={objResponse} isTimed={isTimed} theme={theme} toggleTheme={toggleTheme} difficulty={difficulty} />
                {/* {timed? <TimeBoundQuiz resObject={questionBank} />:<TimelessQUiz resObject={questionBank}/>} */}
            </div>
        </ThemeContext.Provider>
        
    )
}

