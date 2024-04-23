import { useState, useEffect } from 'react'
import './TodoList.css'
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CreateTask from '../modals/CreateTask.jsx';
import ContactForm from '../modals/ContactForm.jsx';
import Card from '../Card/Card.jsx';
import { Link } from 'react-router-dom'; 


function TodoList() {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

    useEffect(() => {
      let arr = localStorage.getItem("taskList")
      // let obj = JSON.parse(arr)

      if(arr){
        let obj = JSON.parse(arr)
        setTaskList(obj)
      }

    }, [])


  const deleteTask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  const updateListArray = (obj, index) => {
    let tempList = taskList
    tempList[index] = obj
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  const toggle = () => {
    setModal(!modal);
  }

  const saveTask = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setModal(false)
    setTaskList(taskList)
  }

  const [modalOpen, setModalOpen] = useState(false); // State for ContactForm modal

  const toggleContactForm = () => {

    console.log("Toggling modal:", !modalOpen); // Log before state update
    setModalOpen(!modalOpen); // Toggle modal visibility
    console.log("Modal open state:", modalOpen);
  };

  return (
    <>
      <div className = "todopage-container">
        
        <Link to="/" className="todo-home-btn btn" type="button">Home</Link>&nbsp;
        {/* <Link to="/contact" className="home-contact-btn btn" type="button">Contact</Link> */}
        
        <button
          className="home-contact-btn btn"
          type="button"
          onClick={toggleContactForm}>
          Contact
        </button>
        
      

        <div className="todo-heading container-fluid text-center">
          {/* <img src='./src/assets/images/fuhgetaboudit-logo-1.png' className="todo-logo" alt="site logo" /> */}
          <div>
            <img className="hitlist-heading" src="https://fontmeme.com/permalink/240423/5cbdcea6fbcdc215403044f801388d2c.png" alt="hitlist-godfather-font" />
          </div>

          <div>
            <button className = "todo-btn btn btn-outline-light mt-3" onClick={() => setModal(true)}>New Hit</button>
          </div>

        </div>

        <div className="task-container">

          {taskList && taskList.map((obj , index) => 
            <Card key={index} taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> 
          )}

        </div>

        <CreateTask toggle = {toggle} modal = {modal} save = {saveTask} />
        {modalOpen && <ContactForm toggle={toggleContactForm} modal={modalOpen} />}

      </div>
      
    </>
  )
}

export default TodoList
