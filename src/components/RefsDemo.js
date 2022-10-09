import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRefs = React.createRef()
      this.cbRef = null
      this.setCbRef=(element) =>{
        this.cbRef =element
      }

      this.state = {
         
      }
    }

    componentDidMount(){
        // this.inputRefs.current.focus()
        if (this.cbRef) {
            this.cbRef.focus()
            
        } 
        
        // console.log(this.inputRefs);
    }
    clickHandler=()=>{
        alert(this.inputRefs.current.value)
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRefs}></input>
        <input type="text" ref={this.setCbRef}></input>
        <button onClick={this.clickHandler} >Click</button>
      </div>
    )
  }
}

export default RefsDemo