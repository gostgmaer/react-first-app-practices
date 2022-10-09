import React, { Component } from 'react'
import PureCompo from './PureComponent';
import RegularComp from './RegularComp';

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Kishor"
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:"Kishor"
            })
        }, 5000);
    }
  render() {
    console.log("**************************Parent Component Render ****************************")
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name} ></RegularComp>
        <PureCompo name={this.state.name} ></PureCompo>


      </div>
    )
  }
}

export default ParentComp