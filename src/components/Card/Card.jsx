import React, { useState } from 'react';
import './Card.css'

import EditTask from '../modals/EditTask'

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

  return (
    <>       
        <div className = "card-wrapper mr-5" style={{"position" : "relative"}} onClick = {() => setModal(true)}>
            <div className = "card-top" 
                style={{"backgroundColor": "#252524"}}>

                <span className = "card-header" style={{"backgrounColor": "black", "borderRadius": "10px"}}>{taskObj.Name}</span>

                
                <i className = "fa-solid fa-crosshairs" 
                        style={{"color" : "white", "cursor" : "pointer"}} 
                        onClick = {() => setModal(true)}>

                    </i>

                    <i className="fa-solid fa-toilet ml-2" 
                        style = {{"cursor" : "pointer", "justify-content" : "flex-end"}} 
                        onClick = {handleDelete}>

                    </i>

            
            </div>

            <div className = "task-holder">
            
                <p className = "card-details mt-3">{taskObj.Description}</p>

                {/* <div style={{"position": "relative", "left" : "230px", "bottom" : "10px"}}> */}
                {/* <div className="edit-buttons ">
                    <i className = "fa-solid fa-crosshairs" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i className="fa-solid fa-toilet" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div> */}
            </div>
            

        
            <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>

    </>
  );
}

export default Card;


