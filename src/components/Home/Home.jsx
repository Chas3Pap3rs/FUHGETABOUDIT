import { useRef, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ContactForm from '../modals/ContactForm';
import PassphraseForm from '../modals/PassphraseForm';
import CustomAlert from '../modals/CustomAlert';

function Home() {

  //Audio play functionality
  const audioRef = useRef(null); // useRef hook to store audio element

  const playAudio = () => {
  audioRef.current.play(); // Play the audio when h1 is clicked
  };

  // Contact form functionality
  const [modalOpen, setModalOpen] = useState(false); // State for ContactForm modal

  const toggleContactForm = () => {

    setModalOpen(!modalOpen); // Toggle modal visibility
    };

  
  // Custom alert functionality 
  const [showAlert, setShowAlert] = useState(false);

  const toggleAlert = () => {
    setShowAlert(!showAlert); // Toggle the state to show/hide the alert
  };

  function AccessPass() {
    const message = 'Hint: "Our thing" (or "this thing of ours")';
    setShowAlert(true); // Set state to show the alert

    const handleCloseAlert = () => {
      // Perform any actions on close (optional)
      setShowAlert(false); // Update state to hide the alert
    };
    return showAlert && <CustomAlert message={message} onClose={handleCloseAlert} />;
  }

  //Passphrase functionality

  const [showPassphraseForm, setShowPassphraseForm] = useState(false);

  const handleShowPassphraseForm = () => {
    setShowPassphraseForm(true);
  };

  const togglePassphraseForm = () => {
    setShowPassphraseForm(!showPassphraseForm);
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
    {(showAlert || showPassphraseForm) && <div className="blur-background" />}
    {showAlert && (
        <CustomAlert
          message="Hint: &quot;Our thing&quot; (or &quot;this thing of ours&quot;)"
          onClose={toggleAlert} // Pass the toggleAlert function to handle closing the alert
        />
      )}

    <div className="home-content-container container-fluid">


    <a href="#" target="_blank" onClick={(event) => { event.preventDefault(); AccessPass(); }}>
          <img src="./src/assets/images/fuhgetaboudit-logo-1.png" className="home-logo" alt="site logo" />
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
      {/* {showPassphraseForm && (<PassphraseForm onSubmit={handlePassphraseSubmit} />)} */}
      {showPassphraseForm && <PassphraseForm onSubmit={handlePassphraseSubmit} onClose={togglePassphraseForm} />}
      

      
          
    </>
  )
}

export default Home;
