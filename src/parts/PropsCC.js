import React, { Component } from 'react'

class PropsCC extends Component {
  render() {
    return (
      <div style={this.props.style}>The weather is {this.props.status}</div>
    )
  }
}

export default PropsCC