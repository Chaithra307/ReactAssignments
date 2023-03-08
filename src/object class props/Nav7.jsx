import React, { Component } from 'react'

export class Nav7 extends Component {
  render() {
    return (
        <>
        <h1> {this.props.data.username} </h1>
        <h1> {this.props.data.password} </h1>
        </>
    )
  }
}

export default Nav7