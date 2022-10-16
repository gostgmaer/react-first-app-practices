import React, { Component } from 'react'

 class User extends Component {
  render() {
    return (
      <div>
        <span>
            {this.props.render(false)}
        </span>
      </div>
    )
  }
}

export default User