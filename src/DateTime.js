import React from 'react';
import Clock from 'react-live-clock';

const today = new Date();

function DateAndTime() {
    return (
        <div>
            <p>Today is the {today.toLocaleDateString()}</p>
            <p>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Berlin'} />
            </p>
        </div>
    );
}

export default DateAndTime;
