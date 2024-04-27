import React, { useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';

import './Card.css';
import EditTask from '../modals/EditTask';
// import TodoList from '../TodoList/TodoList';



const Card = ({ taskObj, index, deleteTask, updateListArray, handleSetCompleted, onCardDrop }) => {
  const [modal, setModal] = useState(false);
  const [completed, setCompletedLocal] = useState(false);
  // const [isDragging, setIsDragging] = useState(false); // Track dragging state
  

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
    if (taskObj && typeof taskObj === 'object') {  // Check if taskObj is defined and an object
      const newCompletedState = !taskObj.isCompleted; // Toggle local completed state if taskObj exists
      setCompletedLocal(newCompletedState);
      handleSetCompleted(index); // Call the prop function to update completed status in parent component
    }
  };

  // Define a function to handle click on card header
  const handleCardHeaderClick = () => {
    // Do nothing when the card is completed
    if (!completed) {
      setModal(true);
    }
  };

  // Define a function to handle click on card details
  const handleCardDetailsClick = () => {
    // Do nothing when the card is completed
    if (!completed) {
      setModal(true);
    }
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
  accept: 'CARD',
  drop(item, monitor) {
    const draggedIndex = item.index;
    const droppedIndex = index;
    if (draggedIndex !== droppedIndex) {
      onCardDrop(draggedIndex, droppedIndex); // Call the prop function to update order
    }
  },
}));

  // Wrap drag with drop to make the Card component a drop target
const dragDropRef = node => {
  drag(node);
  drop(node);
};

  const opacity = isDragging ? 0.5 : 1; // Adjust opacity on drag

  return (
    <>
      <div ref={dragDropRef} key={index} className={`card-wrapper mr-5 ${completed ? 'completed' : ''}`}
        style={{ "position": "relative", "backgroundColor": "#252524", "filter": completed ? "brightness(40%)" : "none" , opacity}}>
        <div className="card-top" style={{ "backgroundColor": "#252524" }}>
          <span className={`card-header ${completed ? 'disable-pointer' : ''}`} style={{ "backgroundColor": "#252524", "borderRadius": "10px", cursor: !completed ? "grab" : "pointer",}} onClick={handleCardHeaderClick}>{taskObj.Name}</span>
          {!completed && <i className="fa-solid fa-pencil" style={{ "color": "white", "cursor": "pointer" }} onClick={() => setModal(true)}></i>}
          <i className="fa-solid fa-crosshairs" style={{ "color": "white", "cursor": "pointer" }} onClick={handleCompletedClick}></i>
          <i className="fa-solid fa-toilet ml-2" style={{ "cursor": "pointer", "justifyContent": "flex-end" }} onClick={handleDelete}></i>
        </div>
        <div className="task-holder overflow-auto">
          <p className={`card-details mt-3 ${completed ? 'disable-scroll' : ''}`} style={{"cursor": "crosshair"}} onClick={handleCardDetailsClick}>{taskObj.Description}</p>
        </div>
        <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
      </div>
      {/* {console.log(taskObj)} */}
    </>
    
  );
  
};

export default Card;







