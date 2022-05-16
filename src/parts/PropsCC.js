import React, { Component } from 'react'

class PropsCC extends Component {
  render() {
    return (
      <div style={this.props.style}>The weather is {this.props.status}</div>
    )
  }
}

PropsCC.defaultProps = {
  status : "sunny",
  style : { backgroundColor : 'yellow', color : 'black' }
}

export default PropsCC