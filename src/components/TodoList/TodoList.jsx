import React, { useState, useEffect } from 'react';
import './TodoList.css';
import CreateTask from '../modals/CreateTask.jsx';
import ContactForm from '../modals/ContactForm.jsx';
import Card from '../Card/Card.jsx';
import { Link } from 'react-router-dom';

function TodoList() {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    try {
      if (arr) {
        let obj = JSON.parse(arr);
        // Check if obj is an array and has elements
        if (Array.isArray(obj) && obj.length > 0) {
          setTaskList(obj);
        } else {
          console.log("Invalid taskList data in localStorage, setting to empty array");
          setTaskList([]);  // Set to empty array if data is invalid
        }
      }
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      setTaskList([]);
    }
  }, []);
  

  const deleteTask = (index) => {
    let tempList = [...taskList];
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = [...taskList];
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const toggleContactForm = () => {
    console.log("Toggling modal:", !modalOpen);
    setModalOpen(!modalOpen);
    console.log("Modal open state:", modalOpen);
  };

  const saveTask = (newTaskObj) => {
    if (taskList) { // Check if taskList exists before pushing
      let tempList = [...taskList];
      newTaskObj.isCompleted = false;
      tempList.push(newTaskObj);
      localStorage.setItem("taskList", JSON.stringify(tempList));
      setModal(false);
      setTaskList(tempList);
    } else {
      console.log("taskList is empty, cannot add new task");
    }
  };

  return (
    <>
      <div className="todopage-container">
        <Link to="/" className="todo-home-btn btn" type="button">Home</Link>&nbsp;
        <button className="home-contact-btn btn" type="button" onClick={toggleContactForm}>Contact</button>
        <div className="todo-heading container-fluid text-center">
          <div>
            <img className="hitlist-heading" src="https://fontmeme.com/permalink/240423/5cbdcea6fbcdc215403044f801388d2c.png" alt="hitlist-godfather-font" />
          </div>
          <div>
            <button className="todo-btn btn btn-outline-light mt-3" onClick={toggle}>New Hit</button>
          </div>
        </div>
        {/* <div className="task-container"> */}
          {/* {taskList.length > 0 ? (
            taskList.map((obj, index) => ( // Check if taskList has elements before map
              <Card key={index} taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />
            ))
          ) : (
            <p>Loading tasks...</p> // Display a loading message while data is fetched
          )} */}

{taskList.length > 0 ? (
  <div className="task-container">
    {taskList.length > 0 ? (
            taskList.map((obj, index) => ( // Check if taskList has elements before map
              <Card key={index} taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />
            ))
          ) : (
            <p>Loading tasks...</p> // Display a loading message while data is fetched
          )}
  </div>) : null}  

        {/* </div> */}
        <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        {modalOpen && <ContactForm toggle={toggleContactForm} modal={modalOpen} />}
      </div>
    </>
  );
}

export default TodoList;






