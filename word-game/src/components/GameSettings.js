import { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Link,} from "react-router-dom";
import getRandomIntInclusive from './randomNumbergen';
import Icon from '@mdi/react';
// import { mdiHomeCircle } from '@mdi/js';
// import { mdiCursorPointer } from '@mdi/js';
import { mdiInformation } from '@mdi/js';




function GameSettings ({testType, difficulty, numOfQuestion, onFormFieldChange, onFormsubmit, onQuizStart,onTimerOption }) {

    const [showModal, setShowModal] = useState(false);

      const toggleModal = () => {
    
        setShowModal(curr => (curr ===false? true: false));
        console.log("I am ", showModal)
      };

    return (
        <div>
        {/* Hero section-Welcome */}
        <section className="hero is-medium is-link has-background-grey has-text-light">
          <div style={{textAlign:"center"}} class="hero-body">
            <h1 style={{fontSize:60}} className="title has-text-weight-bold" >
              Welcome to &nbsp;
                <p style={{color: "blue", backgroundColor: "grey", display: "inline"}}>L</p>
                <p style={{color: "green", backgroundColor: "grey", display: "inline"}}>I</p>
                <p style={{color: "red", backgroundColor: "grey", display: "inline"}}>N</p>
                <p style={{color: "yellow", backgroundColor: "grey", display: "inline"}}>G</p>
                <p style={{color: "white", backgroundColor: "gray", display: "inline"}}>O</p>&nbsp;! 
            </h1>
            <p style={{fontSize:30}} class="subtitle">
              The Ultimate word association Game
            </p>
          </div>
        </section>

        {/* Modal section starts here, you can apply more stylings here */}
        {showModal && (
            <div  >
            <div className="modal-background"></div>
            <div  style={{color:"white"}} className="modal-content">
            <p>
                Choose number of questions, game type and difficulty level.
                Choose whether you want a timed quiz or not.
            </p>
            <br/>
            <p> In the game, three words will appear on the screen. Below them, there will be two selectable word options. You must choose the option that relates to all three words.
            </p>
            <p>
            Example: 
                    <em>Tree, Branch, Root.
                  Plant - dog </em>
                Correct answer would be <em>Plant.</em>
          
                For each correct answer, you will receive 1 point.
                Try to get as many questions right as possible to climb the leaderboard!
            </p>
            
            </div>
            <button className="modal-close is-large" aria-label="close"></button>
          </div>
            // <div >
            //   <div className="modal-content">
            //     <h2>How to Play</h2>
            //     <ul>
            //       <li>Choose number of questions, game type and difficulty level.</li>
            //       <li>Choose whether you want a timed quiz or not.</li>
            //       <li>
            //         In the game, three words will appear on the screen. Below them,
            //         there will be two selectable word options. You must choose the option
            //         that relates to all three words.
            //       </li>
            //       <li>
            //         Example: 
            //             Tree, Branch, Root.
            //                 Plant - dog
            //         Correct answer would be Plant.
            //       </li>
            //       <li>For each correct answer, you will receive 1 point.</li>
            //       <li>Try to get as many questions right as possible to climb the leaderboard!</li>
            //     </ul>

            //     <button onClick={toggleModal}>Close</button>
            //   </div>
            // </div>
          )}
        {/* <span style={{position: "fixed",top: 0,right: 0, border:"2px solid", padding:5, margin:5, color:"white"}} className="icon-text is-hovered">
        <span className ="icon has-text-info">
          <i className="fas fa-info-circle"></i>
        </span>
          <span>Game rules</span>
        </span> */}

    {/* Icon for Game rules  */}
        <span style={{position: "fixed",top: 0,right: 0, padding:5, margin:5, color:"white"}}>
            
            
            <button onClick={toggleModal}  style={{ color: "black", border: "none", padding: "10px", borderRadius: "20px", cursor: "pointer"}}><span>
              <Icon path={mdiInformation} size={2} />
              </span></button>
            
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
                        <option value= "gre">GRE</option>
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
                        <option value = {getRandomIntInclusive(5,8)}>Medium</option>
                        <option value = {getRandomIntInclusive(9,10)}>Hard</option>
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
                <Link to ="questions"><button onClick={onQuizStart} className="button  is-large is-reponsive is-focused" style={{borderRadius: 10, backgroundColor:"skyblue"}}>Click to Start</button>
                </Link>
              </div>
              
            </div>
            </div>

        </form>
        </div>
    )

}

export default GameSettings;


