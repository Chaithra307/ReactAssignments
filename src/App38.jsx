import React, { Component } from 'react';
import Hoc2 from './Hoc2'
class App38 extends Component {
    render() {
        return (
            <div>{this.props.data}</div>
        )
    }
}

export default Hoc2(App38)
