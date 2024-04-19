import React, {useRef} from 'react'
import './Home.css';


function Home() {
  const audioRef = useRef(null); // useRef hook to store audio element

  const playAudio = () => {
  audioRef.current.play(); // Play the audio when h1 is clicked
  };

  return (
    <>
    <div className="content-container container-fluid">
      <a href="https://idgif.com/" target="_blank">
        <img src='./src/assets/images/fuhgetaboudit-logo-1.png' className="logo" alt="site logo" />
      </a>


      <div>
        <p>&#40;Don't you&#41;</p>
        <h1 onClick={playAudio}>FUHGETABOUDIT</h1>
        <div className="underText">...until the job is finished.</div>
      </div>
    </div>

      <br />

      <div className="homeNav">
        <button className="btn btn-outline-danger">I'm Made</button>&nbsp;
        &nbsp;<button className="btn btn-outline-warning">Join The Family</button>
      </div>

      <audio ref={audioRef} src="./src/assets/audio/forget-about-it-made-with-Voicemod.mp3" preload="auto" />

    </>
  )
}

export default Home;
