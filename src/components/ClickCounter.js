import React, { Component } from "react";
import UpdateComponents from "./WithCounter";

class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
    //   incrementCount = ()=>{
    //       this.setState(prevState =>{
    //           // console.log(count : prevState.count+1);
    //           return {count : prevState.count+1}
    //       })
    //   }
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <button className="btn btn-primary" onClick={incrementCount} > CLick {count} Times</button>
      </div>
    );
  }
}

export default UpdateComponents(ClickCounter);
