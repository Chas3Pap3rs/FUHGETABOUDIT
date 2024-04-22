import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import TodoList from '../TodoList/TodoList';
import './task.css';

const CreateTask = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('')
    const [description, setDescription] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target
    
        if(name === "taskName") {
          setTaskName(value)
        } else {
          setDescription(value)
        }   
      }

    const handleSave = () => {
      let taskObj = {}
      taskObj.Name = taskName
      taskObj.Description = description
      save(taskObj)
    }


    return (
        <>
            <Modal className="task-modal" isOpen={modal} toggle={toggle} style={{"backgroundColor" : "#252524"}}>
                <ModalHeader toggle={toggle}>Hit Request:</ModalHeader>

                <ModalBody>
                  <form>
                    <div className="form-group">
                      <label>Task</label>
                      <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName"/>
                    </div>

                    <div className="form-group">
                      <label>Description</label>
                      <textarea rows="5" className="form-control" value={description}  onChange={handleChange} name="description"></textarea>
                    </div>
                  </form>
                </ModalBody>

                <ModalFooter>
                    <Button color="danger" onClick={handleSave}>
                        CONSIDER IT DONE
                    </Button>{' '}
                    <Button color="warning" onClick={toggle}>
                        EH, FUHGETABOUDIT...
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default CreateTask
