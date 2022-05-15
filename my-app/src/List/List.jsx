import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const { list } = this.props
    return (
      <div>
        { list.map((fruit, index) => {
          return (
            <div key={fruit}>{index + 1} - {fruit}</div>
          )
        })}
      </div>
    )
  }
}
