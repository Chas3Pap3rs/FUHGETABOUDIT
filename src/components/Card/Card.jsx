import React, { useState, useEffect } from 'react';
import './Card.css';
import EditTask from '../modals/EditTask';
// import TodoList from '../TodoList/TodoList';

const Card = ({ taskObj, index, deleteTask, updateListArray, handleSetCompleted }) => {
  const [modal, setModal] = useState(false);
  const [completed, setCompletedLocal] = useState(false);

  useEffect(() => {
    // Update local completed state when taskObj.isCompleted changes
    setCompletedLocal(taskObj.isCompleted);
  }, [taskObj.isCompleted]);

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  const handleCompletedClick = () => {
    const newCompletedState = !completed; // Toggle local completed state
    setCompletedLocal(newCompletedState);
    handleSetCompleted(index); // Call the prop function to update completed status in parent component
  };

  return (
    <>
      <div key={index} className={`card-wrapper mr-5 ${completed ? 'completed' : ''}`} style={{ "position": "relative", "backgroundColor": "#252524", "filter": completed ? "brightness(40%)" : "none" }}>
        <div className="card-top" style={{ "backgroundColor": "#252524" }}>
          <span className="card-header" style={{ "backgroundColor": "#252524", "borderRadius": "10px", "cursor": "pointer" }} onClick={() => setModal(true)}>{taskObj.Name}</span>
          <i className="fa-solid fa-pencil" style={{ "color": "white", "cursor": "pointer" }} onClick={() => setModal(true)}></i>
          <i className="fa-solid fa-crosshairs" style={{ "color": "white", "cursor": "pointer" }} onClick={handleCompletedClick}></i>
          <i className="fa-solid fa-toilet ml-2" style={{ "cursor": "pointer", "justifyContent": "flex-end" }} onClick={handleDelete}></i>
        </div>
        <div className="task-holder overflow-auto">
          <p className="card-details mt-3" onClick={() => setModal(true)}>{taskObj.Description}</p>
        </div>
        <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
      </div>
      {/* {console.log(taskObj)} */}
    </>
    
  );
  
};

export default Card;







