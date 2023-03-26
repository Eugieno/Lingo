// Function for wrong user answer
function wrong() {
    const sfxWrong = new Audio("assets/sfx/incorrect.wav");
    sfxWrong.play()
    // feedbackEl.textContent = "wrong!"

    // feedbackEl.removeAttribute("class", "hide");
    // setTimeout(() => {
    //     feedbackEl.setAttribute("class", "hide")
    // }, 1000);

}

export default wrong;