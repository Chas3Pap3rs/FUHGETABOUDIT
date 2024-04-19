import React, {useRef} from 'react'
import './TodoList.css'

function TodoList() {
  const audioRef = useRef(null); // useRef hook to store audio element

  const playAudio = () => {
  audioRef.current.play(); // Play the audio when h1 is clicked

  return (
    <>
      <div className = "header">
        {/* <a href="/" target="_blank"> */}
          <img src='./src/assets/images/fuhgetaboudit-logo-1.png' className="logo position-absolute top-0 start-0" alt="site logo" />
        {/* </a> */}

        <img className="godfatherFont" onClick={playAudio} src="https://fontmeme.com/permalink/240419/a6f218d53b911d03f6486acb997ce446.png" alt="godfather-font" border="0" />

        <div className="position-absolute top-0 start-50 translate-middle-x">
          <h3 >Hit List</h3>
          <button className = "btn btn-outline-light">New Hit</button>
        </div>
      </div>

      <div className="task-container">

      </div>
      
      <audio ref={audioRef} src="./src/assets/audio/forget-about-it-made-with-Voicemod.mp3" preload="auto" />
    </>
  )
}

export default TodoList
