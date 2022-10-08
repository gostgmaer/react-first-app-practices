import React, { Component } from "react";
import UpdateLifeCycleB from "./UpdateLifeCycleB";

class UpdateLifeCycleMethodA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Kishor",
    };
    console.log("UpdateLifeCycleMethodA Constructor");
  }
  //   static getDrivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("UpdateLifeCycleMethodA  static getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate() {
    console.log("UpdateLifeCycleMethodA  shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(preProps, PrevState) {
    console.log("UpdateLifeCycleMethodA getSnapshotBeforeUpdate");
    return null
  }
  componentDidUpdate(preProps, PrevState, snapshot) {
    console.log("UpdateLifeCycleMethodA  componentDidUpdate");
  }
  changeState =()=>{
    this.setState({
        name:"Sarkar"
    })
  }

  render() {
    console.log("UpdateLifeCycleMethodA  Render");
    return (
      <div>
        <div>UpdateLifeCycleMethodA</div>
      
       <button className="btn btn-primary" onClick={this.changeState} >Change State</button>
       <UpdateLifeCycleB></UpdateLifeCycleB>


      </div>
    );
  }
}

export default UpdateLifeCycleMethodA;
