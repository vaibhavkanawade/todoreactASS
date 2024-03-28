// App.js
import './App.css';
import React, { useState } from 'react';
import InputComponent from './components/InputComponent';
import TaskListComponent from './components/TaskListComponent';

export default function App() {
  const [task, setTask] = useState([]);

  const addTask = (description, date) => {
    setTask([
      ...task,
      {
        description: description,
        date: date,
        completed: false
      }
    ]);
  };

  const handleCheckboxChange = (index) => {
    const newTask = [...task];
    newTask[index].completed = !newTask[index].completed;
    setTask(newTask);
  };

  const handleDeleteTask = (index) => {
    const newTask = [...task].filter((taskItem, i) => i !== index);
    setTask(newTask);
  };

  const isTaskDue = (completionDate) => {
    const now = new Date();
    const dueDate = new Date(completionDate);

    now.setUTCHours(0, 0, 0, 0);
    dueDate.setUTCHours(0, 0, 0, 0);
    return dueDate < now;
  };

  return (
    <div className='app'>
      <h1>To Do Application</h1>
      <InputComponent onAddTask={addTask} />
      <TaskListComponent
        tasks={task}
        onCheckboxChange={handleCheckboxChange}
        onDeleteTask={handleDeleteTask}
        isTaskDue={isTaskDue}
      />
    </div>
  );
}
