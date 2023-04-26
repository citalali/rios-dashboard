import React from 'react';
import { useState } from 'react';

const AddNewLink = () => {
    const [links, setLinks] = useState([]);
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setLinks([...links, name]);
        setName('');
    };

    const handleChange = (event) => {
        setName(event.target.value);
    };
    const handleHide = () => {
        document.getElementById('linkList').style.display = 'none';
        document.getElementById('LinkLogo').style.display = 'block';
    };
    const showLinks = () => (
        <div className="singleToDos">
            <a href={links}>{links}</a> <br></br>
        </div>
    );

    return (
        <>
            <p id="hideLink" className="hide" onClick={handleHide}>
                X
            </p>
            <form className="textColour">
                <div>{showLinks()}</div>
                <label>Link: </label>
                <input type="text" value={name} onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </>
    );
};

export default AddNewLink;
