import './App.css';
import DateAndTime from './DateTime';
import Google from './Google';
import ShowWeather from './Weather';
import AddNewLink from './AddLink';
import ToDoList from './toDoList';
import Greeting from './components/Greeting';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div id="mainDiv">
                    <Greeting />
                    <Google />
                    <DateAndTime />
                    <div id="weatherDiv">
                        <ShowWeather />
                    </div>
                    <div id="linkList">
                        <h3 className="textColour">Links</h3>
                        <AddNewLink />
                    </div>
                    <div>
                        <ToDoList />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
