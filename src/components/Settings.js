import React, { useState } from 'react';

const Settings = ({ onHandleSubmit }) => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onHandleSubmit(name);
        localStorage.setItem('userName', name);
    };
    const handleDelete = () => {
        setName('');
        onHandleSubmit(name);
        localStorage.removeItem('userName');
    };
    const handleHide = () => {
        document.getElementById('SettingsList').style.display = 'none';
        document.getElementById('SettingsLogo').style.display = 'block';
    };
    return (
        <div>
            <p id="hideSettings" className="hide" onClick={handleHide}>
                X
            </p>
            <form onSubmit={handleSubmit} class="SettingsForm">
                <input
                    type="text"
                    placeholder="Type Your Name"
                    value={name}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Settings;
