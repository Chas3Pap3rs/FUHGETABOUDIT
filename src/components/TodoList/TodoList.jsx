import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';


import './TodoList.css';

import CreateTask from '../modals/CreateTask.jsx';
import ContactForm from '../modals/ContactForm.jsx';
import Card from '../Card/Card.jsx';

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
  };

  const updateListArray = (obj, index) => {
    let tempList = [...taskList];
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
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

  const handleSetCompleted = (index) => {
    let tempList = [...taskList];
    tempList[index].isCompleted = !tempList[index].isCompleted;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
  };

  const handleCardDrop = (draggedIndex, droppedIndex) => {
    const tempList = [...taskList]; // Create a copy
    const [draggedItem] = tempList.splice(draggedIndex, 1); // Remove dragged item
    tempList.splice(droppedIndex, 0, draggedItem); // Insert dragged item at new position
    setTaskList(tempList); // Update state with the new list
    localStorage.setItem("taskList", JSON.stringify(tempList)); // Update local storage
    console.log("Card with index", draggedIndex, "is being dropped to", droppedIndex); // Use received parameters only
  };

  return (
    <>
    {/* <DndProvider backend={HTML5Backend}> */}
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

        {taskList.length > 0 ? (
          <div className="task-container" id="task-container">
            {taskList.length > 0 ? (
              taskList.map((obj, index) => ( // Check if taskList has elements before map
                <Card key={index} taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} handleSetCompleted={handleSetCompleted} onCardDrop={handleCardDrop} draggable={!modal}/>
              ))
              ) : (
                <p>Loading tasks...</p> // Display a loading message while data is fetched
            )}

          </div>) : null} 

        <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        {modalOpen && <ContactForm toggle={toggleContactForm} modal={modalOpen} />}
      </div>
      {/* </DndProvider>  */}
    </>
  );
}

export default TodoList;






