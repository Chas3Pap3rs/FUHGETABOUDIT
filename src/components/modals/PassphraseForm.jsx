// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function PassphraseForm({ onSubmit }) {
//     const [passphrase, setPassphrase] = useState(''); // State for entered passphrase
//     const navigate = useNavigate(); // Get navigate function
  
//     const handlePassphraseChange = (event) => {
//       setPassphrase(event.target.value);
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       if (passphrase === 'Cosa Nostra') { // Replace with your actual passphrase
//         console.log('Access granted');
//         navigate('/todo-list'); // Navigate to Todo page
//       } else {
//         alert('I smell a rat...');
//       }
//     };

//   return (
//     <form className="passphrase-form" onSubmit={handleSubmit}>
//       <input
//         type="password" // Use password type for security
//         value={passphrase}
//         onChange={handlePassphraseChange}
//         placeholder="Enter Passphrase"
//         required
//       />

//         &nbsp;
//         &nbsp;

//       <button type="submit" className="home-login-btn btn">
//         Let me in..
//       </button>
//     </form>
//   );
// }

// export default PassphraseForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function PassphraseForm({ onClose }) {
  const [passphrase, setPassphrase] = useState(''); // State for entered passphrase
  const navigate = useNavigate(); // Get navigate function

  const handlePassphraseChange = (event) => {
    setPassphrase(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (passphrase === 'Cosa Nostra') {
      console.log('Access granted');
      navigate('/todo-list'); // Navigate to Todo page
    } else {
      alert('I smell a rat...');
    }
    onClose(); // Close the PassphraseForm
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
        <button type="submit" className="passphrase-submit-btn btn">
          Let me in..
        </button>
        
      <button className="passphrase-close-btn btn" onClick={onClose}>
        Close
      </button>
      </div>
      
    </div>
  );
}

export default PassphraseForm;
