import React, { Component } from 'react'
import UpdateComponents from './WithCounter'

 class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
    //   incrementCount = ()=>{
    //       this.setState(prevState =>{
    //           // console.log(count : prevState.count+1);
    //           return {count : prevState.count+1}
    //       })
    //   }
  render() {
    const {count,incrementCount}=this.props
    return (
      <div className='h1'>
        <span onMouseOver={incrementCount} >  Hover {count} Times</span>
      </div>
    )
  }
}

export default UpdateComponents(HoverCounter)