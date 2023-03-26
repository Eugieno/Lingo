function correct() {
    const sfxRight = new Audio("./sfx/correct.wav")
    sfxRight.play()
    // feedbackEl.textContent = "correct!"

    // feedbackEl.removeAttribute("class", "hide");
    // var myTimeout = setTimeout(() => {
    //     feedbackEl.setAttribute("class", "hide")
    // }, 1000);
}

// Function for wrong user answer
function wrong() {
    const sfxWrong = new Audio("./sfx/incorrect.wav");
    sfxWrong.play()
    // feedbackEl.textContent = "wrong!"

    // feedbackEl.removeAttribute("class", "hide");
    // setTimeout(() => {
    //     feedbackEl.setAttribute("class", "hide")
    // }, 1000);

}



export {correct, wrong};