import 'bulma/css/bulma.min.css';
import { Link } from "react-router-dom";

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
                    <option value="TOEFL">TOEFL</option>
                    <option value = "GMAT">GMAT</option>
                    <option value= "GRE">GRE</option>
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
                    <option value = "easy" >Easy</option>
                    <option value = "medium">Medium</option>
                    <option value = "hard">Hard</option>
                  </select>
                </div>
              </div>
            </div>


            <div class="control">
            <p>Do you want a timed Quiz?</p>
              <label class="radio">
                <input onChange={onTimerOption} type="radio" name="answer"/>
                Yes
              </label>
              <label class="radio">
                <input onChange={onTimerOption} type="radio" name="answer"/>
                No
              </label>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <Link to ="questions"><button onClick={onQuizStart} class="button is-link">Start Quiz</button></Link>
              </div>
            </div>
            </div>

        </form>
        </>
    )

}

export default GameSettings;


