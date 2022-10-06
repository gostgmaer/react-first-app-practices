import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Helow",
    };
    // this.clickHandler = this.clickHandler.bind(this)
  }
//   clickHandler() {
//     this.setState({
//       message: "Good Bye",
//     });
//     console.log(this);
//   }


clickHandler = (params)=>{
    this.setState({
        message:"good bye"
    })
    console.log(params);
}
  render() {
    return (
      <div>
        <p> {this.state.message}</p>
        {/* <button onClick={this.clickHandler.bind(this)} type="button" className="btn btn-primary">Click</button> */}
        {/* <button
          onClick={() => this.clickHandler()}
          type="button"
          className="btn btn-primary"
        >
          Click
        </button> */}
        {/* <button
          onClick={this.clickHandler}
          type="button"
          className="btn btn-primary"
        >
          Click
        </button> */}
           <button
          onClick={this.clickHandler}
          type="button"
          className="btn btn-primary"
        >
          Click
        </button>
      </div>
    );
  }
}

export default EventBind;
