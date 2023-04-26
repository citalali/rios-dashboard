import React from 'react';

const ChangeTheme = () => {
    var darkTheme = false;
    const changeColours = () => {
        var root = document.querySelector(':root');
        if (darkTheme === true) {
            darkTheme = false;
            root.style.setProperty('--border-color', '#394867');
            root.style.setProperty('--background-color', '#F1F6F9');
            root.style.setProperty('--highlight', '#212A3E');
            root.style.setProperty('--mid', '#9BA4B5');
        } else {
            darkTheme = true;
            root.style.setProperty('--border-color', '#393646');
            root.style.setProperty('--background-color', '#4f4557');
            root.style.setProperty('--highlight', '#f4eee0');
            root.style.setProperty('--mid', '#6d5d6e');
        }
    };
    return (
        <div className="ChangeColoursDiv">
            <button onClick={changeColours} className="ColourChangeButton">
                Change Theme
            </button>
        </div>
    );
};

export default ChangeTheme;
