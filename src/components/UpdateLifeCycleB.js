import React, { Component } from "react";

class UpdateLifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Kishor",
    };
    console.log("UpdateLifeCycleMethodB Constructor");
  }
  //   static getDrivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("UpdateLifeCycleMethodB  static getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate() {
    console.log("UpdateLifeCycleMethodB  shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(preProps, PrevState) {
    console.log("UpdateLifeCycleMethodB getSnapshotBeforeUpdate");
    return null
  }
  componentDidUpdate(preProps, PrevState, snapshot) {
    console.log("UpdateLifeCycleMethodB  componentDidUpdate");
  }

  render() {
    console.log("UpdateLifeCycleMethodB  Render");
    return (
      <div>
        {/* <LifeCycleB></LifeCycleB> */}
        ReactLiftcycle A
      </div>
    );
  }
}

export default UpdateLifeCycleB;
