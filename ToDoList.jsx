import React from "react";
import { useState } from "react";

function ToDoList(){
    const [tasks ,setTasks] = useState([]);
    const [newTasks ,setNewTasks] = useState("");

    function handleInputChange (event){
        setNewTasks(event.target.value);
 }

 function addTask(){
    setTasks(tasks =>[...tasks,newTasks]);
    setNewTasks("");
 }

 function deleteTask(index){
    const updatedTasks = tasks.filter((_,i) => i !== index );
    setTasks(updatedTasks);
    }
    
 
    return(
    <div className="to-do-list">
        <h1>ToDOList</h1>
        <div>
        <input 
        type="text"
        placeholder="Enter a task"
        value={newTasks}
        onChange={handleInputChange} />
        <button className="add-button"
        onClick={addTask}>Add</button>
        </div>

        <ol>
            {tasks.map((tasks,index) =>
            <li key={index}>
                <span className="text">{tasks}</span>
                <button className="delete-button" 
                onClick={() => deleteTask(index)}>Delete</button>
            </li>
            )}
        </ol>
    </div>)
} 
export default ToDoList