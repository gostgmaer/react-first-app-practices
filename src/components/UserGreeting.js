import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: true,
    };
  }
  render() {
   return this.state.isLoggedin&&<div>Welcome Sarkar</div>
    // if (this.state.isLoggedin) {
    //   return (
    //     <div>
    //       <div>Welcome Sarkar</div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <div>Welcome Kishor</div>
    //     </div>
    //   );
    // }
    // let message;
    // if (this.state.isLoggedin) {
    //   message = <div>Welcome Sarkar</div>;
    // } else {
    //   message = <div>Welcome Gause User</div>;
    // }
    // return (
    //     this.state.isLoggedin?<div>Welcome Sarkar</div>:<div>Welcome Gause</div>
    // );
  }
}

export default UserGreeting;
