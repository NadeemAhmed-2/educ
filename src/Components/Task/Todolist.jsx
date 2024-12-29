import React, { useState, useEffect } from 'react';
import "./TodoList.css"
const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    // Load tasks from localStorage when the component mounts
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    // Save tasks to localStorage whenever tasks change
    useEffect(() => {
        if (tasks.length > 0) {
            // Save the updated tasks array in localStorage
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } else {
            // If there are no tasks, clear the localStorage
            localStorage.removeItem('tasks');
        }
    }, [tasks]);

    const handleAddTask = () => {
        if (currentTask.trim() === '') return;
        if (editIndex !== null) {
            // Update existing task
            const updatedTasks = [...tasks];
            updatedTasks[editIndex] = currentTask;
            setTasks(updatedTasks);
            setEditIndex(null);
        } else {
            // Add new task
            setTasks([...tasks, currentTask]);
        }
        setCurrentTask('');
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks); // Remove task from the state

        // Update localStorage with the new list of tasks
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleEditTask = (index) => {
        setCurrentTask(tasks[index]);
        setEditIndex(index);
    };

    return (
        <div className="todo-container">
            <h1 className="todo-header">To-Do List</h1>
            <div className="todo-input-container">
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={currentTask}
                    onChange={(e) => setCurrentTask(e.target.value)}
                    className="todo-input"
                />
                <button onClick={handleAddTask} className="todo-add-btn">
                    {editIndex !== null ? 'Update' : 'Add'}
                </button>
            </div>
            <ul className="todo-list">
                {tasks.map((task, index) => (
                    <li key={index} className="todo-item">
                        <span className="todo-task">{task}</span>
                        <div className="todo-actions">
                            <button
                                onClick={() => handleEditTask(index)}
                                className="todo-update-btn"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => handleDeleteTask(index)}
                                className="todo-delete-btn"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
