import React, { Component } from 'react'

class message extends Component {
  constructor() {
    super()
    this.state={
      message:"Welcome Visitor"
    }

  }
  changeMessage(){
    this.setState({
      message:"Thank You for Subscribes me"
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()} > Subscribe </button>
      </div>
    )
  }
}

export default message