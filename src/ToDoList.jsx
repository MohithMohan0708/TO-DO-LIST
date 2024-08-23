import React, { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState(["To Eat Breakfast", "To Take a Bath", "To Read a Book"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(tasks => [...tasks, newTask]);
            setNewTask("");
        }
    }

    function removeTask(index) {
        const updatedTasks = tasks.filter((task, i) => i !== index)
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length()) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (<div className="to-do-list">

        <h1>To-Do-List</h1>
        <input type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange} />
        <button className="add-button" onClick={addTask}>Add</button>
        <ul className="list-of-tasks">
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button"
                        onClick={() => removeTask(index)}>
                        Delete
                    </button>
                    <button className="move-button" onClick={() => moveTaskUp(index)}>☝️</button>
                    <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
                </li>
            )}
        </ul>
    </div>);
}

export default ToDoList;