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
            throw new Error('Custom error!!')
        }


        render() {
            return (
                <TargetComponent {...this.props} count={this.state.count} setCount={this.setCount}></TargetComponent>
            )
        }
    }

    return CounterHOC
}