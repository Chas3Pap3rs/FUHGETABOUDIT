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

    console.log("Toggling modal:", !modalOpen); // Log before state update
    setModalOpen(!modalOpen); // Toggle modal visibility
    console.log("Modal open state:", modalOpen);
    };

  function AccessPass() {
    alert('Hint: "Our thing" (or "this thing of ours")');
  }

  return (
    


    <>

    <div className="home-content-container container-fluid">


      <a href="#" target="_blank" onClick={AccessPass}>
        <img src='./src/assets/images/fuhgetaboudit-logo-1.png' className="home-logo" alt="site logo" />
      </a>


      <div className="home-logo-sign">
        <p className="home-p">&#40;Don't you&#41;</p>
        <img className="home-godfatherFont" onClick={playAudio} 
        // src="https://fontmeme.com/permalink/240419/a6f218d53b911d03f6486acb997ce446.png"
        src="https://fontmeme.com/permalink/240423/3037bed5fa1fcb450d00cc3d72788e9d.png"
        alt="home-godfather-font" border="0" />
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
      {/* {modalOpen ? <ContactForm toggle={toggleContactForm} modal={modalOpen} /> : null} */}

      {/* <div className="popup" id="popup">
        <p>This is a popup!</p>
        <p>Overlay uses <b>:before</b> and <b>:after</b> pseudo-classes.</p>
        <p>Website will still remain visible behind this popup.</p>
        <a href="#" onClick="hide('popup')">Close</a>
      </div> */}
          
    </>
  )
}

export default Home;
