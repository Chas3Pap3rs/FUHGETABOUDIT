import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'; // Import necessary components
import { useForm, ValidationError } from '@formspree/react';

import CustomAlert from './CustomAlert';


function ContactForm({ toggle, modal }) { 
    
  const [state, handleSubmit] = useForm("mqkrwwag"); // Receive props for modal state and toggle function
  const [showFirstAlert, setShowFirstAlert] = useState(false);
  const [showSecondAlert, setShowSecondAlert] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await handleSubmit(event);
      // Successful form submission
      setShowFirstAlert(true);
    } catch (error) {
      // Error submitting form
      alert('There was an error sending your message. Please try again.');
    }
  };

  const handleFirstAlertClose = () => {
    setShowFirstAlert(false);
    setShowSecondAlert(true);
  };

  const handleSecondAlertClose = () => {
    setShowSecondAlert(false);
    toggle(); // Close the modal
  };

  return (
  <>
    <Modal isOpen={true} toggle={toggle} style={{"fontFamily" : "Pricedown Bl, sans-serif", "fontSize" : "larger"}}>
      <ModalHeader className="modal-head" toggle={toggle}>You come to me...</ModalHeader>
      
      <ModalBody >
        <Form 
        // action="https://formspree.io/f/mqkrwwag"
              method="POST"
              onSubmit={handleFormSubmit}>
          <FormGroup>
            <Label htmlFor="name">First Name:</Label>
            <Input type="text" name="first-name" id="first-name" placeholder="Enter your first name" required/>
            
        
            <Label htmlFor="name">Last Name:</Label>
            <Input type="text" name="last-name" id="last-name" placeholder="Enter your last name" required/>
            
          </FormGroup>
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input type="email" name="email" id="email" placeholder="Enter your email" required/>
          </FormGroup>
          
          <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />

          <FormGroup>
            <Label for="message">Request:</Label>
            <Input type="textarea" name="message" id="message" placeholder="Write your message" style={{"minHeight" : "200px"}} required/>
          </FormGroup>

        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
             />

          <Button className="home-contact-btn btn" color="black" type="submit" disabled={state.submitting} style={{"color" : "goldenrod"}}>
            Please, Godfather..
          </Button>

        </Form>
      </ModalBody>
      <ModalFooter>
        <Button className="passphrase-close-btn btn" color="black" style={{"color" : "darkred"}} onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>

    {showFirstAlert && (
        <CustomAlert
          message="Send successful, we'll be in touch"
          onClose={handleFirstAlertClose}
        />
      )}

      {showSecondAlert && (
        <CustomAlert
          message="Alright, alright! I'll give you the password... It's Cosa Nostra. Yeah, that's right: Cosa Nostra. Don't ever say I never did anything for ya."
          onClose={handleSecondAlertClose}
        />
      )}

</>

    
  );
}

export default ContactForm;
