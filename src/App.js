import logo from "./logo.svg";
import "./App.css";
import Greed from "./components/Greed";
import ClassComponent from "./components/ClassComponent";
import Helow from "./components/Helow";
// import Welcome from './components/welcome';
import Message from "./components/message";
import State from "./components/state";
import Counter from "./components/Counter";
import EventHandling from "./components/EventHandling";
import ClassClickEvent from "./components/ClassClickEvent";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import InlineCSS from "./components/InlineCSS";
import "./assets/css/appStyles_module.css";
import styles from "./assets/css/appStyles.css";

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
      {/* <State></State> */}

      {/* <ClassComponent></ClassComponent>
      <Helow></Helow> */}
      {/* <Greed name="Kishor" />
       <Greed name="Sam" />
       <Greed name="ram" />
        <Greed name="souvik" /> */}
      {/* <Welcome name="Child Component"  ></Welcome> */}

      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <EventHandling></EventHandling>
        <ClassClickEvent></ClassClickEvent> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      <h1 className="error" >
        Error
      </h1>
      <h1 className="success" >
      success
      </h1>
      <Stylesheet primary={true}></Stylesheet>
      <InlineCSS></InlineCSS>
    </div>
  );
}

export default App;
