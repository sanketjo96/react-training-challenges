import React, { Component } from 'react'
import { Counter } from '../HOC/CounterHOC'

class HoverCounter extends Component {
  render() {
    return (
      <div onMouseOver={this.props.setCount}>{this.props.label}: {this.props.count}</div>
    )
  }
}

export default Counter(HoverCounter)
