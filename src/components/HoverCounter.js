import React, { Component } from 'react'

 class HoverCounter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      incrementCount = ()=>{
          this.setState(prevState =>{
              // console.log(count : prevState.count+1);
              return {count : prevState.count+1}
          })
      }
  render() {
    const {count}=this.state
    return (
      <div className='h1'>
        <span onMouseOver={this.incrementCount} > Hover {count} Times</span>
      </div>
    )
  }
}

export default HoverCounter