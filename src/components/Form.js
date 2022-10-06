import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:""
      }
    }
    handleuserName=(event)=>{
        this.setState({
            userName:event.target.value
        })

    }
  render() {
    return (
      <div><form className="form-inline">
        <div className="form-group">
          
            <input type="text" name="" id="asas" placeholder="Add a User Name" className="form-control" onChange={this.handleuserName}  value={this.state.userName}  aria-describedby="helpId"/>
            <small id="helpId" className="text-muted">Help text</small>
        </div>
      </form></div>
    )
  }
}

export default Form