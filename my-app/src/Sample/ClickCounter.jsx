import React, { Component } from 'react'
import { Counter } from '../HOC/CounterHOC'

class ClickCounter extends Component {

    // Error boundaries do not catch errors inside event handlers. 
    // React doesn't need error boundaries to recover from errors in event handlers. 
    // Unlike the render method and lifecycle methods, the event handlers don't happen during rendering. 
    // So if they throw, React still knows what to display on the screen.
    setCount = () => {
        throw new Error('I crashed while in event !');
    }
    render() {
        throw new Error('I crashed while rendering !');
        return (
            <div onClick={this.setCount}>{this.props.label}: {this.props.count}</div>
        )
    }
}

export default Counter(ClickCounter)
