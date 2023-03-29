import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiHomeCircle } from '@mdi/js';
import { mdiCursorPointer } from '@mdi/js';
import { mdiInformation } from '@mdi/js';




function Rules() {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    
    setShowModal(curr => (curr ===false? true: false));
    console.log("I am ", showModal)
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Game Rules</button>

      {/* <Icon path={mdiAccount}
        title="User Profile"
        size={1}
        horizontal
        vertical
        rotate={90}
        color="red"
        spin
      /> */}
      <div>
      <Icon path={mdiHomeCircle} size={2} />
      </div>
      <div>
      <Icon path={mdiCursorPointer} size={2} rotate={90} blink />
      </div>
      <div>
      <Icon path={mdiInformation} size={2} />
      </div>
      
      

      {showModal && (
        <div>
          <div className="modal-content">
            <h2>How to Play</h2>
            <ul>
              <li>Choose number of questions, game type and difficulty level.</li>
              <li>Choose whether you want a timed quiz or not.</li>
              <li>
                In the game, three words will appear on the screen. Below them,
                there will be two selectable word options. You must choose the option
                that relates to all three words.
              </li>
              <li>
                Example: 
                    Tree, Branch, Root.
                        Plant - dog
                Correct answer would be Plant.
              </li>
              <li>For each correct answer, you will receive 1 point.</li>
              <li>Try to get as many questions right as possible to climb the leaderboard!</li>
            </ul>

            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
 
      }
export default Rules;


