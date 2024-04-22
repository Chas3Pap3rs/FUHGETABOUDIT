import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './task.css';
import { Link } from 'react-router-dom'; 


function ContactForm() {

    return (
    //     <Modal className="contact-modal" isOpen={modal} toggle={toggle}>
    //         <ModalHeader toggle={toggle}>Update Task</ModalHeader>
    //         <ModalBody>
    //         <div className = "form-group">
    //                     <label>Email:</label>
    //                     <input type="email" className = "form-control" placeholder="Enter your email" required/>
    //                 </div>
    //                 <div className = "form-group">
    //                     <label>Title:</label>
    //                     <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
    //                 </div>
    //                 <div className = "form-group">
    //                     <label>Description: </label>
    //                     <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
    //                 </div>
                
    //         </ModalBody>
    //         <ModalFooter>
    //         <Button color="warning" style={{"font-family" : "Anton, sans-serif", "background-color" : "#252524", "color" : "goldenrod"}} onClick={handleUpdate}>Get To It</Button>{' '}
    //         <Button color="danger" style={{"font-family" : "Anton, sans-serif", "background-color" : "#252524", "color" : "red"}} onClick={toggle}>Fuhgetaboudit</Button>
    //         </ModalFooter>
    //   </Modal>

    <>
    <Modal>
    <ModalBody>
        <div>
            <form className="container-fluid" 
            action="https://formspree.io/f/mkndrkkq"
            method="POST">
              <div className="form-group row">
                <div className="col col-lg-6 offset-lg-3">
                    <h6><label className="container-fluid p-0">
                      Name:
                        <input type="text"
                        name="name" id="full-name"
                            className="form-control" 
                            placeholder="Enter your full name here"
                            required></input>
                    </label></h6>
              
                </div>
              </div>

              <div className="form-group row">
                <div className="col col-lg-6 offset-lg-3">
                  <h6><label className="container-fluid p-0">
                    Email:
                  <input type="email"
                    id="email"
                    name="_replyto" 
                    className="form-control"  
                    placeholder="Enter your email" 
                    required></input>
                  </label></h6>
                </div>
              </div>

              <div className="form-group row">
                  <div className="col col-lg-6 offset-lg-3">
                      <h6><label>
                          Message:
                      </label></h6>
                      <textarea className="form-control"
                              name="message"
                              id="textarea" 
                              rows="3"
                              required></textarea>
                  </div>
              </div>

              <div className="form-group row">
                  <div className="col col-lg-6 offset-lg-3">
                      <button type="submit" 
                      className="btn btn-outline-dark">
                          Submit
                      </button>            
                  </div>
              </div>
            </form>
          </div>
          </ModalBody>
          </Modal>
        
    </>
    );
}

export default ContactForm;
