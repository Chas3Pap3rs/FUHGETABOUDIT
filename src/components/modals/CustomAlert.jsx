import React from 'react';

function CustomAlert({ message, type = 'info', onClose }) {
  const alertClasses = `custom-alert alert-${type}`;

  const handleClose = () => {
    onClose && onClose(); // Call onClose function if provided
  };

  // return (
  //   <div className={alertClasses}>
  //     <div><p>{message}</p></div>
  //     <div>
  //       <button className="alert-close " 
  //               color="black" 
  //               style={{"borderRadius" : "10px", 
  //                       "backgroundColor" : "#252524", 
  //                       "border" : "1.5px outset black", 
  //                       "color" : "forestgreen", 
  //                       "fontSize" : "larger"}} 
  //               onClick={handleClose}>Close
  //         </button>
  //     </div>
  //   </div>
  // ); 

  return (
    <div className={alertClasses}>
      <div className="alert-content"> {/* Wrap content in a container */}
        <p className="alert-message">{message}</p> {/* Apply styling to p element */}
        <div>
          <button className="alert-close " 
                  color="black" 
                  style={{"borderRadius" : "10px", 
                          "backgroundColor" : "#252524", 
                          "border" : "1.5px outset black", 
                          "color" : "forestgreen", 
                          "fontSize" : "larger"}} 
                  onClick={handleClose}>Close
          </button>
        </div>
      </div>
    </div>
  ); 
}

export default CustomAlert;