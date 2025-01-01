import React, { Component } from 'react'

class Createstate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            background_color: 'red',
            font_color: 'white',
            text: 'Create State'
        };
    }

    render() {
        return (
            <div>
                <h1 style={this.state.background_color}>{this.state.text}</h1>
                <button>Change Color</button>
            </div>
        )
    }
    
}

export default Createstate;