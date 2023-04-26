import React from 'react';

const ClickForComponent = (props) => {
    const handleClick = () => {
        document.getElementById(props.elementId).style.display = 'none';
        document.getElementById(props.bigDiv).style.display = 'block';
    };
    return (
        <>
            <p id={props.elementId} className={props.elementClassName} onClick={handleClick}>
                {props.name}
            </p>
        </>
    );
};

export default ClickForComponent;
