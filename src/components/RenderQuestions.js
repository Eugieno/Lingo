import TimelessQuiz from "./TimelessQuiz";
import { createContext, useState } from "react";
import "./renderQ.css";


export const ThemeContext = createContext(null);

export default function RenderQuestions ({diff, testArea, objResponse,timed}) {
    const [theme, setTheme] = useState("light");
    
    const toggleTheme = ()=> {
        setTheme((curr) => (curr==="light" ? "dark": "light"))
    }
      
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div id={theme}>
                
                <TimelessQuiz objResponse={objResponse} theme={theme} toggleTheme={toggleTheme} />
                {/* {timed? <TimeBoundQuiz resObject={questionBank} />:<TimelessQUiz resObject={questionBank}/>} */}
            </div>
        </ThemeContext.Provider>
        
    )
}

