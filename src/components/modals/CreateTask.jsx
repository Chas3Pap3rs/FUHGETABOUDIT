import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './task.css';

const CreateTask = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = () => {
    let taskObj = {};
    taskObj.Name = taskName;
    taskObj.Description = description;
    // taskObj.isCompleted = false;
    save(taskObj);

    // Reset input fields after successful save
    setTaskName('');
    setDescription('');
  };

  const handleToggle = () => {
    toggle(); // Call toggle function first to close the modal

    // Reset input fields after closing the modal (regardless of saving)
    setTaskName('');
    setDescription('');
  };


  return (
    <>
      <Modal className="task-modal" isOpen={modal} toggle={handleToggle} style={{ "backgroundColor": "#252524", "fontFamily": "Pricedown Bl, sans-serif", "fontSize": "larger" }}>
        <ModalHeader className="modal-head" toggle={handleToggle}><h1>Hit Request:</h1></ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task:</label>
              <input type="text" className="form-control" minLength="1" maxLength="25" value={taskName} onChange={handleChange} name="taskName" required />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea rows="5" className="form-control" value={description} onChange={handleChange} name="description"></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="black" style={{ "border": "1.5px outset black", "color": "forestgreen", "fontSize": "larger" }} onClick={handleSave}>CONSIDER IT DONE</Button>{' '}
          <Button color="black" style={{ "border": "1.5px outset black", "color": "darkred", "fontSize": "larger" }} onClick={handleToggle}>FUHGETABOUDIT</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CreateTask;












