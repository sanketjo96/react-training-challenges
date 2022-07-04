import React, { Component } from 'react'
import PureComponentWidget from './PureComponent'

export default class Parent extends Component {
    constructor() {
        super()
        this.state = {
            label: 'sample'
        }
    }


    onInputChange = (e) => {
        this.setState({ label: e.target.value })
    }

    render() {
        return (
            <>
                <PureComponentWidget></PureComponentWidget>
                <input value={this.state.label} onChange={this.onInputChange}></input>
            </>
        )
    }
}
