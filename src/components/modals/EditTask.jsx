import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './task.css';

const EditTask= ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }


    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        updateTask(tempObj)
        toggle();
    }

    return (
        <Modal className="task-modal" style={{"fontFamily" : "Pricedown Bl, sans-serif", "fontSize" : "x-large"}} isOpen={modal} toggle={toggle}>

            <ModalHeader className="modal-head" toggle={toggle}><h1>Plan B</h1></ModalHeader>

            <ModalBody>
            
                <div className = "form-group" >
                    <label >Task Name:</label>
                    <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName" style={{"fontFamily" : "Pricedown Bl, sans-serif", "fontSize" : "large"}}/>
                </div>
                <div className = "form-group">
                    <label>Description:</label>
                    <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description" style={{"fontFamily" : "Pricedown Bl, sans-serif", "fontSize" : "large"}}></textarea>
                </div>
                
            </ModalBody>

            <ModalFooter>
                <Button color="black" style={{"border" : "1.5px outset black", "backgroundColor" : "#252524", "color" : "forestgreen", "fontSize" : "larger"}} onClick={handleUpdate}>Get To It</Button>{' '}
                <Button color="black" style={{"border" : "1.5px outset black", "backgroundColor" : "#252524", "color" : "goldenrod", "fontSize" : "larger"}} onClick={toggle}>Fuhgetaboudit</Button>
            </ModalFooter>

      </Modal>
    );
};

export default EditTask;