import { useState } from 'react';

function GameRulesModal() {

  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    const newShowModal = !showModal
    setShowModal(newShowModal);
    console.log("I am ", showModal)
  };

  // return (
  //   <div>
  //     <button onClick={toggleModal}>Open Game Rules</button>

  //     {showModal && (
  //       <div className="modal">
  //         <div className="modal-content">
  //           <h2>How to Play</h2>

  //           <ul>
  //             <li>Choose number of questions, game type and difficulty level.</li>
  //             <li>Choose whether you want a timed quiz or not.</li>
  //             <li>
  //               In the game, three words will appear on the screen. Below them,
  //               there will be two selectable word options. You must choose the option
  //               that relates to all three words.
  //             </li>
  //             <li>
  //               Example: 
  //                   Tree, Branch, Root.
  //                       Plant - dog
  //               Correct answer would be Plant.
  //             </li>
  //             <li>For each correct answer, you will receive 1 point.</li>
  //             <li>Try to get as many questions right as possible to climb the leaderboard!</li>
  //           </ul>

  //           <button onClick={toggleModal}>Close</button>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
  return (
    <div>
      <button class="js-modal-trigger" data-target="modal-js-example">Open Game Rules</button>

      {showModal && (
        <div id="modal-js-example" className="modal">
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

export default GameRulesModal;

