import React, { useState } from 'react';

const Settings = ({ onHandleSubmit }) => {
    const [name, setName] = useState('');
    //const [nameList, setNameList] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //setNameList(name);

        onHandleSubmit(name);
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
        </div>
    );
};

export default Settings;
