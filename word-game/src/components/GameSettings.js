import 'bulma/css/bulma.min.css';
import { Link,} from "react-router-dom";
import getRandomIntInclusive from './randomNumbergen';


function GameSettings ({testType, difficulty, numOfQuestion, onFormFieldChange, onFormsubmit, onQuizStart,onTimerOption }) {

    return (
        <>
        <form className="form">
          <div className = "">
            <div className="field">
              <label class="label">Number of questions</label>
              <div class="control">
                <div class="select">
                  <select
                  value={numOfQuestion}
                  name ="numOfQuestion"
                  onChange={onFormFieldChange}
                  type = ""
                  placeholder='' >
                    <option value="10">10</option>
                    <option value= "15">15</option>
                    <option value = "20">20</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Select test type</label>
              <div class="control">
                <div class="select">
                  <select
                    value={testType}
                    name ="testType"
                    onChange={onFormFieldChange}
                    type = ""
                    placeholder='' >
                    <option value="toefl">TOEFL</option>
                    <option value = "gmat">GMAT</option>
                    <option value= "sat">SAT</option>
                    <option value= "overall">Combined</option>
                    <option value= "ielts">IELTS</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div class="field">
              <label class="label">Select difficulty</label>
              <div class="control">
                <div class="select">
                  <select
                    value={difficulty}
                    name ="difficulty"
                    onChange={onFormFieldChange}
                    type = ""
                    placeholder='' >
                    <option value = {getRandomIntInclusive(1,4)} >Easy</option>
                    <option value = {getRandomIntInclusive(5,7)}>Medium</option>
                    <option value = {getRandomIntInclusive(8,10)}>Hard</option>
                  </select>
                </div>
              </div>
            </div>


            <div class="control">
            <p>Do you want a timed Quiz?</p>
              <label class="radio">
                <input onChange={onTimerOption} type="radio" name="time-option" value={true}/>
                Yes
              </label>
              <label class="radio">
                <input onChange={onTimerOption} type="radio" name="time-option" value= {false}/>
                No
              </label>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <Link to ="questions"><button onClick={onQuizStart} class="button is-link">Start Quiz</button>
                </Link>
                
              </div>
              
            </div>
            </div>

        </form>
        </>
    )

}

export default GameSettings;


