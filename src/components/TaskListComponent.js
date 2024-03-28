// TaskListComponent.js
import React from 'react';

function TaskListComponent({ tasks, onCheckboxChange,
    onDeleteTask, isTaskDue }) {
    return (
        <ul className='task'>
            {tasks.map((task, index) => (
                <li key={index} style={{
                    border: isTaskDue(task.date) ?
                        '2px solid yellow' : 'none'
                }}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onCheckboxChange(index)}
                    />
                    <span style={{
                        textDecoration: task.completed ? 'line-through' :
                            'none'
                    }}>{task.description}</span>
                    {isTaskDue(task.date) && <span> :Due day is passed</span>}
                    <button onClick={() => onDeleteTask(index)}
                        className="delete-task">Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskListComponent;
