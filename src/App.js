import './App.css';
import DateAndTime from './DateTime';
import Google from './Google';
import ShowWeather from './Weather';
import AddNewLink from './AddLink';
import ToDoList from './toDoList';

const name = 'Rio';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div id="mainDiv">
                    <h1>Hey {name}</h1>
                    <Google />
                    <DateAndTime />
                    <div id="weatherDiv">
                        <ShowWeather />
                    </div>
                    <div id="linkList">
                        <h3>Links</h3>
                        <AddNewLink />
                    </div>
                    <div id="toDo">
                        <ToDoList />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
