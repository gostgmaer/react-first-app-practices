import React, { Component } from 'react'
import MemoComponent from './MemoComponent';
import PureCompo from './PureComponent';
import RegularComp from './RegularComp';

class MemoParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Kishor"
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:"Sarkar"
            })
        }, 5000);
    }
  render() {
    console.log("************************** Memo Parent Component Render ****************************")
    return (
      <div>
        Meno  Parent Component
        {/* <RegularComp name={this.state.name} ></RegularComp>
        <PureCompo name</MemoComponent>={this.state.name} ></PureCompo> */}
        <MemoComponent name= {this.state.name}  > </MemoComponent>


      </div>
    )
  }
}

export default MemoParentComponent