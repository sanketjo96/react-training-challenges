import React, { Component } from 'react'

export default class Event extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ename: ''
        }
    }

    onClickHandler = (e) => {
        this.setState({ ename: e.type })
    }

    onMouseDownHanlder = (e) => {
        this.setState({ ename: e.type })
    }

    onMouseEnterHandler = (e) => {
        this.setState({ ename: e.type })
    }
    render() {
        return (
            <div onClick={this.onClickHandler}
                onMouseEnter={this.onMouseEnterHandler} 
                onMouseDown={this.onMouseDownHanlder}>
                Event: {this.state.ename}
            </div>
        )
    }
}
