import React from "react"
import { Component } from "react";
class Nav extends Component
{
    render()
    {
        return(
            <h1>{this.props.data}</h1>
        )
    }
}
export default Nav