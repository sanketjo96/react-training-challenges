import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    onChildClick = (data) => {
        console.log(`Child comunicated with ${data}`)
    }

    render() {
        return (
            <Child handler={this.onChildClick}></Child>
        )
    }
}
