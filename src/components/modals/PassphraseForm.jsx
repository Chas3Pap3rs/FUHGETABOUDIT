import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomAlert from './CustomAlert';




function PassphraseForm({closeIt}) {
  const [passphrase, setPassphrase] = useState(''); // State for entered passphrase
  const navigate = useNavigate(); // Get navigate function

  

  const handlePassphraseChange = (event) => {
    setPassphrase(event.target.value);
    console.log('type');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (passphrase === 'Cosa Nostra') {
      console.log('Access granted');
      navigate('/todo-list'); // Navigate to Todo page
      // handlePassphraseSubmit(passphrase);
    } else {
      alert('I smell a rat...');
      return (<CustomAlert message='I smell a rat...' type='alert' onClose={closeIt} />);
    }
    // closeIt(); // Close the PassphraseForm
  };
  


  return (
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
    
  );
}

export default PassphraseForm;
