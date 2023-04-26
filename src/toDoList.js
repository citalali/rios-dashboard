import React from 'react';
import { useState } from 'react';

const ToDoList = () => {
    const [toDoArray, setToDoArray] = useState([]);
    const [newTask, setTask] = useState('');

    const handleChange = (event) => {
        setTask(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setToDoArray([...toDoArray, newTask]);
        setTask('');
    };
    const handleDelete = (index) => {
        const newToDoArray = [...toDoArray];
        newToDoArray.splice(index, 1);
        setToDoArray(newToDoArray);
    };

    const showToDos = toDoArray.map((toDoArray, index) => (
        <div className="singleToDos">
            <label htmlFor={toDoArray}>{toDoArray}</label>
            <button htmlFor={toDoArray} onClick={() => handleDelete(index)}>
                DONE
            </button>
        </div>
    ));
    const handleHide = () => {
        document.getElementById('toDoDiv').style.display = 'none';
        document.getElementById('toDoLogo').style.display = 'block';
    };

    return (
        <div className="textColour toDoComponent">
            <p id="hideToDo" className="hide" onClick={handleHide}>
                X
            </p>
            <p>To-Do List</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a ToDo"
                    value={newTask}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            <ul>{showToDos}</ul>
        </div>
    );
};

export default ToDoList;
