import { getByPlaceholderText } from '@testing-library/react';
import React from 'react';

const name = ' Rio';

const options = {
    timeZone: 'Europe/Berlin',
    hour: 'numeric',
    hour12: false,
};

var greetingMsg = '';

var hour = new Date().toLocaleTimeString('en-IN', options);

if (hour > 5 && 13 > hour) {
    greetingMsg = 'Good Morning, ';
} else if (hour > 11 && hour < 19) {
    greetingMsg = 'Good Afternoon, ';
} else if (hour > 18 && hour < 23) {
    greetingMsg = 'Good Evening, ';
} else {
    greetingMsg = 'Good Night, ';
}

function Greeting() {
    return (
        <>
            <h1 className="textColour">
                {greetingMsg}
                {name}
            </h1>
        </>
    );
}

export default Greeting;
