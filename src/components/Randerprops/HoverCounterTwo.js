import React, { Component } from "react";

class HoverCounterTwo extends Component {
   
  render() {
    const { count,incrementCount}=this.props
    return (
      <div className=" border d-block" >
        <span className=" h3" onMouseOver={incrementCount}>
          Hover {count} Times
        </span> <br/>
       
      </div>
    );
  }
}

export default HoverCounterTwo;

