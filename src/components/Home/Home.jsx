import React, {useRef} from 'react'
import './Home.css';


function Home() {
  const audioRef = useRef(null); // useRef hook to store audio element

  const playAudio = () => {
  audioRef.current.play(); // Play the audio when h1 is clicked
  };

  return (
    <>
    <div className="home-content-container container-fluid">
      <a href="https://idgif.com/" target="_blank">
        <img src='./src/assets/images/fuhgetaboudit-logo-1.png' className="home-logo" alt="site logo" />
      </a>


      <div className="home-logo-sign">
        <p className="home-p">&#40;Don't you&#41;</p>
        <img className="home-godfatherFont" onClick={playAudio} src="https://fontmeme.com/permalink/240419/a6f218d53b911d03f6486acb997ce446.png" alt="godfather-font" border="0" />
        {/* <h1 onClick={playAudio}>FUHGETABOUDIT</h1> */}
        <div className="home-underText">...until the job is finished.</div>
      </div>
    </div>

      <br />

      <div className="homeNav">
        <button className=" home-login-btn btn">I'm Made</button>&nbsp;
        &nbsp;<button className="home-contact-btn btn" >Join The Family</button>
      </div>

      <audio ref={audioRef} src="./src/assets/audio/forget-about-it-made-with-Voicemod.mp3" preload="auto" />

    </>
  )
}

export default Home;
