import wrongSound from "./sfx/wrongSound.wav"
import correctSound from "./sfx/correctSound.wav"


function correct() {
    const sfxRight = new Audio(correctSound)
    sfxRight.play()
    
}

// Function for wrong user answer
function wrong() {
    const sfxWrong = new Audio(wrongSound);
    sfxWrong.play()
    

}

const greenLight =(e)=> { setTimeout((e)=> {
    e.target.setAttribute("style", "background: #d4edda; border:1px solid #c3e6cb; color:#155724;")
},1000)}

export {correct, wrong, greenLight};