import react from 'react';

var toDos = [
    { name: '1 aufgbe', id: 1 },
    { name: '2 aufgabe', id: 2 },
    { name: '3 aufgabe', id: 3 },
];

const AddNewToDo = () => {
    return (
        <form>
            <label>Link: </label>
            <input type="text" id="name" name="name" />
            <label>Name: </label>
            <input type="link" id="link" name="link" />
            <button type="submit" /*onClick={}*/>Submit</button>
        </form>
    );
};

export default toDos;
