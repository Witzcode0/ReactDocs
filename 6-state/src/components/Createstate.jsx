import React, { Component } from 'react'

class Createstate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            background_color: 'red',
            font_color: 'orange',
            text: 'Create State'
        };
    }

    render() {
        return (
            <div>
                <h1 style={{ color: this.state.font_color}}>{this.state.text}</h1>
                <button>Change Color</button>
            </div>
        )
    }
    
}

export default Createstate;