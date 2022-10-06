import { Alert } from 'bootstrap'
import React, { Component } from 'react'
// import message from './message'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:"",
         comment:"",
         topic:'vue'
      }
    }
    handleuserName=(event)=>{
        this.setState({
            userName:event.target.value
            
        })

    }
    handleComment=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    topicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=(event) =>{
        alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    return (
      <div><form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          
            <input type="text" name="" id="asas" placeholder="Add a User Name" className="form-control" onChange={this.handleuserName}  value={this.state.userName}  aria-describedby="helpId"/>
            <small id="helpId" className="text-muted">Help text</small>
        </div>
        <div className="form-group">
          <label >Comments</label>
          <textarea className="form-control" name="" id="" rows="3" value={this.state.comment} onChange={this.handleComment}></textarea>
        </div>
        <div className="form-group">
          <label >Topic</label>
          <select className="form-control" name="topic" id="" value={this.state.topic} onChange={this.topicChange}>
            <option value="angular">Angular</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit Data</button>
      </form></div>
    )
  }
}

export default Form