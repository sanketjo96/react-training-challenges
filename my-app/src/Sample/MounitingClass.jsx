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

    render() {
        console.log('3. Render')
        
        // You must need to return something
        // from component
        return <span>{this.state.label}</span>
    }

    componentDidMount() {
        console.log('4. componentDidMount')
    }
}
