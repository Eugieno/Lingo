import { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Link,} from "react-router-dom";
import getRandomIntInclusive from './randomNumbergen';
import Icon from '@mdi/react';

import { mdiInformation } from '@mdi/js';




function GameSettings ({testType, difficulty, numOfQuestion, onFormFieldChange, onFormsubmit, onQuizStart,onTimerOption }) {

    const [showModal, setShowModal] = useState("modal");

      const toggleModal = () => {
        setShowModal(curr => curr=== "modal"? "modal is-active": "modal")
      }

      // const toggleModal = () => {
    
      //   setShowModal(curr => (curr ===false? true: false));
      //   console.log("I am ", showModal)
      // };

    return (
        <div>
        {/* Hero section-Welcome */}
        <section className="hero is-medium is-link has-background-grey has-text-light is-mobile">
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

          {/* Modal section starts here, you can apply more stylings here */}
          {showModal && (
              <div id="modal" class={showModal}>
              <div class="modal-background"></div>
              <div class="modal-content">
                <div class="box">
                  <h2>How to Play</h2>
                  <p> Choose a Test Provider and a desired difficulty  level. You will be taken to the question page. 
                  </p>
                  <br/>
                  <p>
                    For each question, you are provided with three words that are related in certain ways. Their relationship may be antonymic, synonymic, contextual, denotative etc. 
                  </p>
                  <br/>
                  <p>
                    Your task is to choose a word (out of 2 options) that shares thesame relationship as the 3 words provided.  
                  </p>
                  <br/>
                  <p>
                      Example: 
                    <em> SHOP | WATER | STOP</em>
          
                      <p>CODE</p>
                      <p>BAR</p>
                     <p>Correct answer would be BAR. Reason being that you can find water and stop at the shop and bar. The association amongst the words in this case is <em>CONTEXTUAL</em></p>
                     <br/>
                     <p>Try to get as many questions right as possible to climb the leaderboard!</p>
                  </p>
               
                </div>
              </div>
              <button onClick={toggleModal} class="modal-close is-large" aria-label="close">Close</button>
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
        </section>

        
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


