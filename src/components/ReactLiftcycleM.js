import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class ReactLiftcycleM extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Kishor",
    };
    console.log("LifeCycleA Constructor");
  }
//   static getDrivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA  static getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA  componentDidMount");
  }

  render() {
    console.log("LifeCycleA  Render");
    return <div>
        <LifeCycleB></LifeCycleB>
        ReactLiftcycle A
        </div>;
  }
}

export default ReactLiftcycleM;
