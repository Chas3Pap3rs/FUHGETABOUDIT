import React, { useState } from 'react';
import './Card.css';
import EditTask from '../modals/EditTask';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);
  const [completed, setCompleted] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

//   const updateCompletedState = async () => {
//     const tempList = [...taskList]; // Spread operator to avoid mutation
//     // Find the index of the task to update
//     const targetIndex = taskList.findIndex((obj) => obj.Name === taskObj.Name);
//     // Update the isCompleted property for the target task
//     tempList[targetIndex].isCompleted = !completed;
//     // Update local storage and state
//     localStorage.setItem("taskList", JSON.stringify(tempList));
//     setTaskList(tempList);
//     setCompleted(!completed); // Update local component state
//   };

  return (
    <>
      <div key={index} className={`card-wrapper mr-5 ${completed ? 'completed' : ''}`} style={{ "position": "relative", "backgroundColor": "#252524", "filter": completed ? "brightness(40%)" : "none" }}>
        <div className="card-top" style={{ "backgroundColor": "#252524" }}>
          <span className="card-header" style={{ "backgroundColor": "#252524", "borderRadius": "10px", "cursor": "pointer" }} onClick={() => setModal(true)}>{taskObj.Name}</span>
          <i className="fa-solid fa-pencil" style={{ "color": "white", "cursor": "pointer" }} onClick={() => setModal(true)}></i>
          <i className="fa-solid fa-crosshairs" style={{ "color": "white", "cursor": "pointer" }} onClick={() => setCompleted(!completed)}></i>
          <i className="fa-solid fa-toilet ml-2" style={{ "cursor": "pointer", "justifyContent": "flex-end" }} onClick={handleDelete}></i>
        </div>
        <div className="task-holder overflow-auto">
          <p className="card-details mt-3" onClick={() => setModal(true)}>{taskObj.Description}</p>
        </div>
        <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
      </div>
    </>
  );
};

export default Card;







