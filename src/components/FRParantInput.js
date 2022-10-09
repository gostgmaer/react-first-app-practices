import React, { Component } from 'react'
import FRInput from './FRInput'

 class FRParantInput extends Component {

    constructor(props) {
      super(props)
      this.inputREf= React.createRef()
    
      this.state = {
         
      }
    }
    clickHandler=()=>{
        this.inputREf.current.focus()
    }
  render() {
    return (
      <div>
        <FRInput  ref = {this.inputREf} ></FRInput>
        <button onClick={this.clickHandler} >Focus Input</button>


      </div>
    )
  }
}

export default FRParantInput