import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increament() {
        // this.State.count=this.state.count+1
        this.setState({
            count: this.state.count + 1
        }, () => { console.log(this.state.count); })


    }
    render() {
        return (
            <div>
                <p>
                    Count- {this.state.count}
                </p>
                <button className='btn btn-primary' onClick={() => this.increament()} >Increment</button>
            </div>
        )
    }
}

export default Counter