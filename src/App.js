import logo from './logo.svg';
import './App.css';
import Greed from './components/Greed';
import ClassComponent from './components/ClassComponent';
import Helow from './components/Helow';
// import Welcome from './components/welcome';
import Message from './components/message'
import State from './components/state';
import Counter from './components/Counter';



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
     <State></State>
     
      {/* <ClassComponent></ClassComponent>
      <Helow></Helow> */}
       {/* <Greed name="Kishor" />
       <Greed name="Sam" />
       <Greed name="ram" />
        <Greed name="souvik" /> */}
        {/* <Welcome name="Child Component"  ></Welcome> */}
   
        {/* <Message></Message> */}
        <Counter></Counter>
    </div>
  );
}

export default App;
