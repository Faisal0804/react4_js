import React, { Component } from 'react'

export class ClassCom extends Component {
  render() {
    return (
      <h1>{this.props.name}</h1>,
      <p>{this.props.age}</p>
    )
  }
}

export default ClassCom