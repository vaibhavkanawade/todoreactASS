// InputComponent.js
import React, { useState } from 'react';

function InputComponent({ onAddTask }) {
    const [taskList, setTaskList] = useState("");
    const [date, setDate] = useState("");

    const handleInputChange = (event) => {
        setTaskList(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleAddTask = () => {
        if (taskList.trim() !== '') {
            onAddTask(taskList, date);
            setTaskList("");
            setDate("");
        }
    };

    return (
        <div className='task'>
            <input
                type="text"
                value={taskList}
                onChange={handleInputChange}
                placeholder="Enter task"
                className="input"
            />
            <input
                type="date"
                value={date}
                placeholder="Enter completion date"
                onChange={handleDateChange}
                className="input"
            />
            <button onClick={handleAddTask} className="add-button">Add Task</button>
        </div>
    );
}

export default InputComponent;
