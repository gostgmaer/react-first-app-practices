import React, { Component } from "react";

class ClickCounterTwo extends Component {
 
  render() {
    const { count,incrementCount}=this.props
    return (
      <div className=" d-block" >
        <button onClick={incrementCount}>Click {count} Times</button>
      </div>
    );
  }
}

export default ClickCounterTwo;
