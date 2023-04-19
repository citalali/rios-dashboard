import React from 'react';
import { useState } from 'react';

///?????? somethings wring here lol

const AddNewLink = () => {
    const [links, setLinks] = useState([]);

    const listLinks = links.map((links) => (
        <a href={links}>
            TEST
            <br />
        </a>
    ));

    const handleSubmit = (event) => {
        event.preventDefault();
        links([...listLinks, setLinks]);
        listLinks('');
    };
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <form className="textColour">
            <div>{listLinks}</div>
            <label>Link: </label>
            <input type="text" value={name} onChange={handleChange} />
            <label>{name} </label>
            <input type="link" id="link" name="link" />
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </form>
    );
};

export default AddNewLink;
