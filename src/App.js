import './App.css';
import DateAndTime from './DateTime';
import Google from './Google';
import ShowWeather from './Weather';
import MakeNewList from './LinkList';

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
                    <div>
                        <MakeNewList />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
