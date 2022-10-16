import React, { Component } from 'react'
import WithHocCounter from './WithHocCounter'

class ClickhocCounter extends Component {
  render() {
    const {count,incrementCountData}=this.props
   
    return (
      <div>
        <button className='btn btn-primary' onClick={incrementCountData} > {this.props.name} CLick {count} Times </button>
      </div>
    )
  }
}

export default WithHocCounter(ClickhocCounter)