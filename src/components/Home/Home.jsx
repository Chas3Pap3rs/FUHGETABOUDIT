import { useRef, useState } from 'react';
import './Home.css';
// import TodoList from '../TodoList/TodoList';
import { Link } from 'react-router-dom';
import ContactForm from '../modals/ContactForm';

function Home() {
  const audioRef = useRef(null); // useRef hook to store audio element

  const playAudio = () => {
  audioRef.current.play(); // Play the audio when h1 is clicked
  };

  const [modalOpen, setModalOpen] = useState(false); // State for ContactForm modal

  const toggleContactForm = () => {
    setModalOpen(!modalOpen); // Toggle modal visibility
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

        {/* <button className="home-login-btn btn">I'm Made</button> */}
        <Link to="/todo-list" className="home-login-btn btn" type="button">I'm Made</Link>
        
        &nbsp;
        &nbsp;
        {/* <Link to="/contact" className="home-contact-btn btn" type="button">Join The Family</Link> */}
        <button
            className="home-contact-btn btn"
            type="button"
            onClick={toggleContactForm} // Trigger ContactForm toggle function
          >
            Join The Family
          </button>

      </div>

      <audio ref={audioRef} src="./src/assets/audio/forget-about-it-made-with-Voicemod.mp3" preload="auto" />
      

          {/* Render ContactForm conditionally based on modalOpen state */}
          {modalOpen && <ContactForm toggle={toggleContactForm} modal={modalOpen} />}

    </>
  )
}

export default Home;
