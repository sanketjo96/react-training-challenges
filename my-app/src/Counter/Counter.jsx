import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    handleIncrement = () => {
        this.setState((prevState) => {
            return {
                counter: ++prevState.counter
            }
        })
    }

    render() {
        return (
            <>
                <div>Counter: <span onMouseOver={this.handleIncrement}>{this.state.counter}</span></div>
                <button onClick={this.handleIncrement}>Increment</button>
            </>
        )
    }
}
