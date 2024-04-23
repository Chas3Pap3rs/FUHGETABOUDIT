
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'; // Import necessary components
import { useForm, ValidationError } from '@formspree/react';

function ContactForm({ toggle, modal }) { 
    
    const [state, handleSubmit] = useForm("mqkrwger");// Receive props for modal state and toggle function
    if (state.succeeded) {
        return <p>See you around.</p>;
    }

    return (
    
    <Modal isOpen={true} toggle={toggle} style={{"fontFamily" : "Pricedown Bl, sans-serif", "fontSize" : "larger"}}>
      <ModalHeader className="modal-head" toggle={toggle}>You come to me...</ModalHeader>
      <ModalBody >
        <Form   action="https://formspree.io/f/mqkrwger"
  method="POST">
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

          <Button color="black" type="submit" disabled={state.submitting} style={{"border" : "1.5px outset black", "color" : "goldenrod", "fontSize" : "larger"}}>
            Please, Godfather..
          </Button>

        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="black" style={{"border" : "1.5px outset black", "color" : "darkred", "fontSize" : "larger"}} onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>

    
  );
}

export default ContactForm;