import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Kishor",
    };
    console.log("LifeCycleB Constructor");
  }
//   static getDrivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB  static getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB  componentDidMount");
  }

  render() {
    console.log("LifeCycleB  Render");
    return <div>LifeCycleB </div>;
  }
}

export default LifeCycleB;
