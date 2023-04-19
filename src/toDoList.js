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

    const showToDos = toDoArray.map((toDoArray) => (
        <div className="singleToDos">
            <input type="checkbox" id={toDoArray}></input>
            <label for={toDoArray}>{toDoArray}</label>
        </div>
    ));

    return (
        <div className="textColour toDoComponent">
            <p>To-Do List</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a ToDo"
                    value={newTask}
                    onChange={handleChange}
                />
                <button>Submit</button>
                <ul>{showToDos}</ul>
            </form>
        </div>
    );
};

export default ToDoList;
