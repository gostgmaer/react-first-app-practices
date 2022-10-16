import logo from "./logo.svg";
import "./App.scss";
import Greed from "./components/Greed";
import ClassComponent from "./components/ClassComponent";
import Helow from "./components/Helow";
// import Welcome from './components/welcome';
import Message from "./components/message";
import State from "./components/state";
// import Counter from "./components/Counter";
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
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParantInput from "./components/FRParantInput";
import PortalDemo from "./components/PortalDemo";
import Modal from "./components/ModalCompnent";
import ModalComponent from "./components/Modal/Modal";
import Home from "./components/ModalCompnent";
import SnacbarIndex from "./components/Snacbar/SnacbarIndex";
import Hero from "./components/Hero";
import ErrorHandling from "./components/ErrorHandling";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
// import ClickHocCounter from "./components/ClickHocCounter";
// import HoverHocCounter from "./components/HoverHocCounter";
import HoverHocCounter from "./components/HOC/HoverCounter";
import ClickhocCounter from "./components/HOC/ClickCounter";
import ClickCounterTwo from "./components/Randerprops/ClickCounterTwo";
import HoverCounterTwo from "./components/Randerprops/HoverCounterTwo";
import User from "./components/Randerprops/User";
import Counter from "./components/Randerprops/Counter";

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
      {/* <MemoParentComponent></MemoParentComponent> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <FocusInput></FocusInput> */}
      {/* <FRParantInput></FRParantInput> */}
      {/* <PortalDemo></PortalDemo> */}
      {/* <Modal></Modal> */}
      {/* <ModalComponent></ModalComponent> */}
      {/* <Home></Home> */}
      {/* <SnacbarIndex></SnacbarIndex> */}

      {/* <ErrorHandling>
      <Hero heroName='batman' />
      <Hero heroName='Super Man' />
      {/* <Hero heroName='joker' /> */}
      {/* </ErrorHandling> */}

      {/* <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter> */}
      {/* <HoverHocCounter name="Sarkar" ></HoverHocCounter>
      <ClickhocCounter  name="Kishor" ></ClickhocCounter> */}
      {/* <ClickHocCounter></ClickHocCounter>
      <HoverHocCounter></HoverHocCounter> */}
      {/* <ClickCounterTwo></ClickCounterTwo>
      <HoverCounterTwo />
      <User render={(isLockedIn) => (isLockedIn ? "Kishor" : "Guest")}></User> */}
      <Counter render={(count, incrementCount) =>(
        <ClickCounterTwo ClickCounterTwo count={count} incrementCount={incrementCount}> </ClickCounterTwo>
      ) } ></Counter>
     <Counter render={(count, incrementCount) =>(
        <HoverCounterTwo ClickCounterTwo count={count} incrementCount={incrementCount}> </HoverCounterTwo>
      ) } ></Counter>
   </div>
  );
}

export default App;
