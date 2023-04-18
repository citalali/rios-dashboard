import react from 'react';
import toDos from './AddNewToDo';
import { useState } from 'react';

const listToDos = toDos.map((toDos) => (
    <>
        <input type="checkbox" id={toDos.id} />
        <label htmlFor={toDos.id}>{toDos.name}</label>
    </>
));

const ToDoList = () => {
    const [newTask, setTask] = useState('');
    const handleChange = (event) => {
        setTask(event.target.value);
    };
    return (
        <div>
            <input type="text" value={newTask} onChange={handleChange} />
            <>{newTask}</>
        </div>
    );
};

export default ToDoList;
