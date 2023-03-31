import wrongSound from "./sfx/wrongSound.wav"
import correctSound from "./sfx/correctSound.wav"


function correct() {
    const sfxRight = new Audio(correctSound)
    sfxRight.play()
    // feedbackEl.textContent = "correct!"

    // feedbackEl.removeAttribute("class", "hide");
    // setTimeout(() => {
    //     this.target.setAttribute("style", "background: #d4edda; border:1px solid #c3e6cb; color:#155724;")
    // }, 1000);
}

// Function for wrong user answer
function wrong() {
    const sfxWrong = new Audio(wrongSound);
    sfxWrong.play()
    // feedbackEl.textContent = "wrong!"

    // feedbackEl.removeAttribute("class", "hide");
    // setTimeout(() => {
    //     feedbackEl.setAttribute("class", "hide")
    // }, 1000);

}

const greenLight =(e)=> { setTimeout((e)=> {
    e.target.setAttribute("style", "background: #d4edda; border:1px solid #c3e6cb; color:#155724;")
},1000)}

export {correct, wrong, greenLight};