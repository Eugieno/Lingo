import 'bulma/css/bulma.min.css';

function GameSettings () {


    return (
        <>
        <div className = "">
            <div class="field">
              <label class="label">Number of questions</label>
              <div class="control">
                <div class="select">
                  <select>
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
                  <select>
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
                  <select>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Start Quiz</button>
              </div>
            </div>
            </div>
        </>
    )

}

export default GameSettings;