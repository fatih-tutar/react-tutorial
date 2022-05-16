import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0
    }

    increase(){
        this.setState({
            count : this.state.count + 1
        })
    }

    decrease(){
        this.setState({
            count : this.state.count - 1 
        })
    }

  render() {
    return (
        <>
            <p>Number : {this.state.count}</p>
            <button onClick = {() => this.increase()}>Add + 1</button>
            <button onClick = {() => this.decrease()}>Subtract - 1</button>
        </>
    )
  }
}

export default Counter