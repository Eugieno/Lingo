import 'bulma/css/bulma.min.css';
import { Link } from "react-router-dom";

function GameSettings ({testType, difficulty, numOfQuestions, onFormFieldChange, onFormsubmit }) {

    return (
        <>
        <form className="form">
          <div className = "">
            <div class="field">
              <label class="label">Number of questions</label>
              <div class="control">
                <div class="select">
                  <select
                  value={numOfQuestions}
                  name =""
                  onChange={onFormFieldChange}
                  type = ""
                  placeholder='' >
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
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
                    name =""
                    onChange={onFormFieldChange}
                    type = ""
                    placeholder='' >
                    <option>TOEFL</option>
                    <option>GMAT</option>
                    <option>GMAT</option>
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
                    name =""
                    onChange={onFormFieldChange}
                    type = ""
                    placeholder='' >
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <Link to ="questions"><button onClick={onFormsubmit} class="button is-link">Start Quiz</button></Link>
              </div>
            </div>
            </div>
        </form>



        
        </>
    )

}

export default GameSettings;