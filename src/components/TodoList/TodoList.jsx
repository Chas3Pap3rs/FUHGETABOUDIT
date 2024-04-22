import { useState, useEffect } from 'react'
import './TodoList.css'
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CreateTask from '../modals/CreateTask.jsx';
import Card from '../Card/Card.jsx';


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

  return (
    <>
        <div className = "todopage-container">
     

      <div className="todo-heading container text-center">
        <div>
          <img className="hitlist-heading" src="https://fontmeme.com/permalink/240419/9579a4fe14db42b26713205df4506f8b.png" alt="hitlist-godfather-font" />
          </div>

      <div>

          <button className = "todo-btn btn btn-outline-light mt-3" onClick={() => setModal(true)}>New Hit</button>

      </div>

      </div>

        
          
            

        

            <div className="task-container">

                {/* {taskList && taskList.map((obj) => <li>{obj.Name}: {obj.Description} </li>)} */}

                {taskList && taskList.map((obj , index) => 
                  <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> 
                )}
            </div>

            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask} />

        </div>
      
    </>
  )
}

export default TodoList
