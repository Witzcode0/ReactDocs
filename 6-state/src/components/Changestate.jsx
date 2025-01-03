import React, { Component } from 'react'

class Changestate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            background_color: 'darkgreen',
            font_color: 'orange',
            text: 'Change State'
        };
    }

    changeFontColor = () => {
        this.setState({font_color: 'pink'});
    }
    

    render() {
        return (
            <div>
                <h1 style={{ color: this.state.font_color, backgroundColor: this.state.background_color}}>{this.state.text}</h1>
                <button onClick={this.changeFontColor}>Change Color</button>
            </div>
        )
    }
    
}

export default Changestate;