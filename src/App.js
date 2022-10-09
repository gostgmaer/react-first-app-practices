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
import "./assets/css/appStyles.css";
import styles from "./assets/css/appStyles.module.css";
import Form from "./components/Form";
import PokemonTable from "./components/PokemonTable";
import ReactLiftcycleM from "./components/ReactLiftcycleM";
import UpdateLifeCycleMethodA from "./components/UpdateLifeCycleMethodA";
import Frangment from "./components/Frangment";
import Table from "./components/Table";
import PureCompo from "./components/PureComponent";
import ParentComp from "./components/ParentComp";
import MemoComponent from "./components/MemoComponent";
import MemoParentComponent from "./components/MemoParentComponent";

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
      {/* <h1 className="error" >
        Error
      </h1>
      <h1 className={styles.success} >
      success
      </h1>
      <Stylesheet primary={true}></Stylesheet>
      <InlineCSS></InlineCSS> */}
      {/* <Form></Form> */}
      {/* <PokemonTable></PokemonTable> */}
      {/* <ReactLiftcycleM></ReactLiftcycleM> */}
      {/* <UpdateLifeCycleMethodA></UpdateLifeCycleMethodA> */}
      {/* <Frangment></Frangment> */}
      {/* <Table></Table> */}
      {/* <PureCompo></PureCompo> */}
      {/* <ParentComp></ParentComp> */}
      {/* <MemoComponent></MemoComponent> */}
      <MemoParentComponent></MemoParentComponent>
    </div>
  );
}

export default App;
