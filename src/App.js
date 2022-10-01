import logo from './logo.svg';
import './App.css';
import Greed from './components/Greed';
import ClassComponent from './components/ClassComponent';
import Helow from './components/Helow';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Greed />
      <ClassComponent></ClassComponent>
      <Helow></Helow>
    </div>
  );
}

export default App;
