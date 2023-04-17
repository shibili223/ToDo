import React, { useState } from "react";

const Form = ({ addTask }) => {
    const [userIput, setUserInput] = useState('')

    const handleAddTask = () => {
        addTask(userIput)
        setUserInput('') 
    }

    return(
        //form
        <div id="taskForm">
        <h3>Add New Task</h3>
        <div className="formField">
            <input type="text" className="taskInput" onChange={(e) => setUserInput(e.target.value)} value={userIput} />
            <button className="taskSubmit" onClick={handleAddTask} >Submit</button>   
           
        </div>
    </div>
    )
}
export default Form