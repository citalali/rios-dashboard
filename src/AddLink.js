import React from 'react';
import { useState } from 'react';

const links = [
    { name: 'test', link: 'blabla' },
    { name: 'test2', link: 'test3' },
    { name: 'test6', link: 'test5' },
];

const listLinks = links.map((links) => (
    <a href={links.link}>
        {links.name}
        <br />
    </a>
));

const AddNewLink = () => {
    const [name, setName] = useState('');
    const handleChange = (event) => {
        setName(event.target.value);
    };
    return (
        <form>
            <div>{listLinks}</div>
            <label>Link: </label>
            <input type="text" value={name} onChange={handleChange} />
            <label>{name} </label>
            <input type="link" id="link" name="link" />
            <button type="submit" /*onClick={}*/>Submit</button>
        </form>
    );
};

export default AddNewLink;
