import { useRef, useState } from 'react';
import './Home.css';
// import TodoList from '../TodoList/TodoList';
import { Link } from 'react-router-dom';
import ContactForm from '../modals/ContactForm';
import PassphraseForm from '../modals/PassphraseForm';

function Home() {

  //Audio plays when clicking logo font
  const audioRef = useRef(null); // useRef hook to store audio element

  const playAudio = () => {
  audioRef.current.play(); // Play the audio when h1 is clicked
  };

  // Opens contact modal  
  const [modalOpen, setModalOpen] = useState(false); // State for ContactForm modal

  const toggleContactForm = () => {

    setModalOpen(!modalOpen); // Toggle modal visibility
    };

  function AccessPass() {
    alert('Hint: "Our thing" (or "this thing of ours")');
  }

  //Passphrase functionality

  const [showPassphraseForm, setShowPassphraseForm] = useState(false);

  const handleShowPassphraseForm = () => {
    setShowPassphraseForm(true);
  };

  const handlePassphraseSubmit = (enteredPassphrase) => {
    if (enteredPassphrase === 'Cosa Nostra') { // Replace with your actual passphrase
      console.log('Access granted');
      // Navigate to Todo page (code goes here)
    } else {
      alert('I smell a rat...');
    }
  };

  return (
    


    <>

    <div className="home-content-container container-fluid">


      <a href="#" target="_blank" onClick={(event) => {AccessPass(); event.preventDefault();}}>
        <img src='./src/assets/images/fuhgetaboudit-logo-1.png' className="home-logo" alt="site logo" />
      </a>


      <div className="home-logo-sign">
        <p className="home-p">&#40;Don't you&#41;</p>
        <img className="home-godfatherFont" onClick={playAudio} 
        src="https://fontmeme.com/permalink/240423/3037bed5fa1fcb450d00cc3d72788e9d.png"
        alt="home-godfather-font" border="0" />
        <div className="home-underText">...until the job is finished.</div>
      </div>
    </div>

      <br />

      <div className="homeNav">


        <Link
          to="/todo-list" // Still set the target URL for potential future use
          className="home-login-btn btn"
          type="button"
          onClick={(event) => {
            event.preventDefault(); // Prevent default navigation
            handleShowPassphraseForm();
          }}>
            I'm Made
        </Link>


        &nbsp;
        &nbsp;
        
        <button
            className="home-contact-btn btn"
            type="button"
            onClick={toggleContactForm} // Trigger ContactForm toggle function
          >
            Join The Family
          </button>

      </div>

      <audio ref={audioRef} src="./src/assets/audio/forget-about-it-made-with-Voicemod.mp3" preload="auto" />
      
      {modalOpen && <ContactForm toggle={toggleContactForm} modal={modalOpen} />}
      {showPassphraseForm && (<PassphraseForm onSubmit={handlePassphraseSubmit} />)}

      
          
    </>
  )
}

export default Home;
