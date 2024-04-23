import React from 'react';
import ClickOutside from 'react-click-outside';

function CustomAlert({ message, type = 'info', onClose }) { // Add a type prop for different styles (optional)
    // console.log('Alert message:', message);
  const alertClasses = `custom-alert alert-${type}`; // Dynamic class based on type


  return (
    <div className={alertClasses}>
      <p>{message}</p>
      <div>
      <button className="alert-close " color="black" style={{"borderRadius" : "10px", "backgroundColor" : "#252524", "border" : "1.5px outset black", "color" : "forestgreen", "fontSize" : "larger"}} onClick={onClose}>Close</button>
      </div>
    </div>
  ); 
}

export default CustomAlert;