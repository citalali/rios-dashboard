import './App.css';
import DateAndTime from './DateTime';
import Google from './Google';
import ShowWeather from './Weather';
import ToDoList from './toDoList';
import Greeting from './components/Greeting';
import ClickForComponent from './components/ClickForComponent';
import GetRandomDog from './components/GetRandomDog';
import Settings from './components/Settings';
import ChangeTheme from './components/ChangeTheme';
import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const handleSubmitChange = (newName) => {
        console.log('New Name;', newName);
        setName(newName);
    };

    return (
        <div className="App">
            <header className="App-header">
                <div id="mainDiv">
                    <Greeting name={name} />
                    <Google />
                    <DateAndTime />

                    <ClickForComponent
                        elementId="weatherLogo"
                        bigDiv="weatherDiv"
                        elementClassName="clickForWeather clickForDiv"
                        name="WEATHER"
                    />
                    <div id="weatherDiv">
                        <ShowWeather />
                    </div>
                    <ClickForComponent
                        elementId="SettingsLogo"
                        bigDiv="SettingsList"
                        elementClassName="clickForSettings clickForDiv"
                        name="SETTINGS"
                    />
                    <div id="SettingsList">
                        <h3 className="textColour">Settings</h3>
                        <Settings onHandleSubmit={handleSubmitChange} />
                    </div>
                    <ChangeTheme />
                    <ClickForComponent
                        elementId="toDoLogo"
                        bigDiv="toDoDiv"
                        elementClassName="clickForToDo clickForDiv"
                        name="TO DO"
                    />
                    <div id="toDoDiv" className="toDoDiv">
                        <ToDoList />
                    </div>
                    <ClickForComponent
                        elementId="dogLogo"
                        bigDiv="dogDiv"
                        elementClassName="clickForDog clickForDiv"
                        name="DOG"
                    />
                    <div id="dogDiv">
                        <GetRandomDog />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
