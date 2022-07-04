import React, { Component } from 'react'
import PureComponentWidget from './PureComponent'

export default class Parent extends Component {
    constructor() {
        super()
        this.state = {
            label: 'sample'
        }
    }


    onInputChange = (data) => {
        this.setState({ label: data })
    }

    render() {
        return (
            <>
                <PureComponentWidget name={this.state.label}></PureComponentWidget>
                <button onClick={() => this.onInputChange('sample')}>SET SAME STATE</button>
                <button onClick={() => this.onInputChange('new sample')}>SET DIFFRENT STATE</button>
            </>
        )
    }
}
