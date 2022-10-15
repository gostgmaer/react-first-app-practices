import React, { Component } from "react";

class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    clickcount = ()=>{
        this.setState(prevState =>{
            // console.log(count : prevState.count+1);
            return {count : prevState.count+1}
        })
    }
  render() {
    const {count}=this.state
    return (
      <div>
        <button className="btn btn-primary" onClick={this.clickcount} >CLick {count} Times</button>
      </div>
    );
  }
}

export default ClickCounter;
