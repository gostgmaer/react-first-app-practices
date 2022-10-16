import React, { Component } from 'react'
import WithHocCounter from './WithHocCounter'

class HoverHocCounter extends Component {
  render() {
    const {count,incrementCountData}=this.props
    return (
      <div>
        <span className='h3' onMouseOver={incrementCountData} > {this.props.name} Hover {count} Times </span>
      </div>
    )
  }
}

export default WithHocCounter(HoverHocCounter, 10)