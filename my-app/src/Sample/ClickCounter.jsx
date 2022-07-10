import React, { Component } from 'react'
import { Counter } from '../HOC/CounterHOC'

class ClickCounter extends Component {
    render() {
        return (
            <div onClick={this.props.setCount}>{this.props.label}: {this.props.count}</div>
        )
    }
}

export default Counter(ClickCounter)
