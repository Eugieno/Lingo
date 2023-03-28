import 'bulma/css/bulma.min.css';
import { Link,} from "react-router-dom";
import getRandomIntInclusive from './randomNumbergen';


function GameSettings ({testType, difficulty, numOfQuestion, onFormFieldChange, onFormsubmit, onQuizStart,onTimerOption }) {

    return (
        <div>
        {/* Hero section-Welcome */}
        <section className="hero is-medium is-link has-background-grey has-text-light">
          <div style={{textAlign:"center"}} class="hero-body">
            <h1 style={{fontSize:60}} className="title has-text-weight-bold" >
              Welcome to Lingo! 
            </h1>
            <p style={{fontSize:30}} class="subtitle">
              The Ultimate word association Game
            </p>
          </div>
        </section>

        <span style={{position: "fixed",top: 0,right: 0, border:"2px solid", padding:5, margin:5, color:"white"}} className="icon-text is-hovered">
        <span className ="icon has-text-info">
          <i className="fas fa-info-circle"></i>
        </span>
          <span>Game rules</span>
        </span>


        

        <form className="form">
          <div className = "">
            {/* <div className="field">
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
            </div> */}

            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <div class="field">
                <label class="label">Select Quiz provider</label>
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
                <label class="label">Select difficulty level</label>
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
            </div>


            {/* <div class="control">
            <p>Do you want a timed Quiz?</p>
              <label class="radio">
                <input onChange={onTimerOption} type="radio" name="time-option" value={true}/>
                Yes
              </label>
              <label class="radio">
                <input onChange={onTimerOption} type="radio" name="time-option" value= {false}/>
                No
              </label>
            </div> */}

            <div style={{display:"flex", justifyContent:"center", alignItems: "center"}} class="field is-grouped">
              <div class="control">
                <Link to ="questions"><button onClick={onQuizStart} className="button is-link is-large is-reponsive is-focused" style={{borderRadius: 10}}>Start Quiz</button>
                </Link>
              </div>
              
            </div>
            </div>

        </form>
        </div>
    )

}

export default GameSettings;


