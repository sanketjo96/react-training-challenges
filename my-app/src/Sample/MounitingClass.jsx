import React, { Component } from 'react'

export default class MoutingClass extends Component {
    constructor() {
        super()
        console.log('1. In constructor')
        this.state = {
            label: 'sample'
        }
    }

    static getDerivedStateFromProps() {
        console.log('2. getDerivedStateFromProps')
        return null
    }

    onInputChange = (e) => {
        this.setState({label: e.target.value})
    }

    render() {
        console.log('3. Render')
        return <input value={this.state.label} onChange={this.onInputChange}></input>
    }

    componentDidMount() {
        console.log('4. componentDidMount')
    }
}
