import React from "react";

const WithHocCounter = (WrapperComponent,incrementNumber) => {
  class WithHocCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 1
      };
    }
    incrementCountData = () => {
      // console.log("it's working");
      this.setState((prevState) => {
        console.log(incrementNumber);
        return { count: prevState.count + incrementNumber };
        
      });
    };
    render() {
    //  console.log(this.state.name);
      return (
        <WrapperComponent count={this.state.count}
        incrementCountData={this.incrementCountData} >
          
          {/* {...this.props} */}
        </WrapperComponent>
      );
    }
  }
  return WithHocCounter
};

export default WithHocCounter;
