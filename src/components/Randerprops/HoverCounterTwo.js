import React, { Component } from "react";

class HoverCounterTwo extends Component {
   
  render() {
    const { count,incrementCount}=this.props
    return (
      <div>
        <span onMouseOver={incrementCount}>
          Hover {count} Times
        </span> <br/>
        
      </div>
    );
  }
}

export default HoverCounterTwo;

