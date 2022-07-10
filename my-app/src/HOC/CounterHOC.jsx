import React, { Component } from 'react'

export const Counter = (TargetComponent) => {
    class CounterHOC extends Component {
        constructor(props) {
            super()
            this.state = {
                count: 0
            }
        }

        setCount = () => {
            this.setState((Pstate) => ({ count: Pstate.count + 1 }))
        }


        render() {
            return (
                <TargetComponent {...this.props} count={this.state.count} setCount={this.setCount}></TargetComponent>
            )
        }
    }

    return CounterHOC
}