import React from "react";
const UpdateComponents = (OriginalComponents) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState) => {
        // console.log(count : prevState.count+1);
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <OriginalComponents
          count={this.state.count}
          incrementCount={this.incrementCount}
        ></OriginalComponents>
      );
    }
  }
  return NewComponent;
};

export default UpdateComponents;
