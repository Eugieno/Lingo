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
      <button class="js-modal-trigger" data-target="modal-js-example">How to Play</button> 

      {showModal && (
        <div id="modal-js-example" className="modal">
          <div className="modal-content">
            <h2>How to Play</h2>
     
             <ul>
              <li>Select the number of questions, 
                game type, race agaisnt the clock
                and difficulty level you wish to play.</li>
              <li>
                There are several question sets to choose from.

                GMAT - A test for business school admission that assesses analytical, writing, quantitative, verbal, and reading skills.

                TOEFL - A test to assess the English language skills of non-native English speakers who want to study or work in an English-speaking country.

                SAT - A test for college admission in the United States that assesses critical reading, mathematics, and writing skills.

                GRE - A test for graduate school admission that assesses analytical writing, verbal reasoning, and quantitative reasoning skills.

                IELTS - A test to assess the English language proficiency of non-native English speakers who want to study or work in an English-speaking country.
              </li>
              <li>
                3 words will appear on screen. 
                You must select the word from the menu that is most like the others.
              </li>
              <li>
                Example: 

                    Tree, Vegetable, Groceries.

                        Plant - dog

                Correct answer would be Plant.
              </li>
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

