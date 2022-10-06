import React, { Component } from 'react'

 class ClassClickEvent extends Component {
    clickHandler(params) {
        console.log(params);
        
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler} type="button" className="btn btn-danger">ClassClickEvent Button</button>
      </div>
    )
  }
}

export default ClassClickEvent