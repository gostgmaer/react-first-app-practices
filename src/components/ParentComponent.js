import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"Parents"
      }
      this.greetparent=this.greetparent.bind(this)
    }
    greetparent(childName){
        alert(`Hellow ${this.state.parentName} from ${childName}`)
    }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetparent}></ChildComponent>
      </div>
    )
  }
}

export default ParentComponent