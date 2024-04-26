import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomAlert from './CustomAlert';




function PassphraseForm({closeIt}) {
  const [passphrase, setPassphrase] = useState(''); // State for entered passphrase
  const [showRatSmelt, setShowRatSmelt] = useState(false);
  const navigate = useNavigate(); // Get navigate function

  const handlePassphraseChange = (event) => {
    setPassphrase(event.target.value);
    console.log('type');
  };

  const handleCloseAlert = () => {
    setShowRatSmelt(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (passphrase === 'cosa nostra') {
      navigate('/todo-list'); // Navigate to Todo page
    } else {
      setShowRatSmelt(true);
      setPassphrase('');
    }   
  };
  


  return (
    <>
      <div className="passphrase-form-container">
        <form className="passphrase-form" onSubmit={handleSubmit}>
          <input
            type="password"
            value={passphrase}
            onChange={handlePassphraseChange}
            placeholder="Enter Passphrase"
            style={{ width: '220px', height: '50px' }}
            required
          />
        </form>
          <div className="passphrase-control">
          <button type="submit" className="passphrase-submit-btn btn" onClick={handleSubmit}>
            Let me in
          </button>
          
        <button type="button" className="passphrase-close-btn btn" onClick={closeIt}>
          Close
        </button>
        </div>
      </div>

      {showRatSmelt && (<CustomAlert message='I smell a rat...' onClose={handleCloseAlert} />)}
    </>
    
  );
}

export default PassphraseForm;
