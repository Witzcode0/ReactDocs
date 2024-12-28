import React from "react";

class Bike extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "black",
            h1_text : "white",
            text_align: "center"
        }
    }

    render() {
        return (
            <div style={{backgroundColor: this.state.color }}>
                <h1 style={{color: this.state.h1_text, textAlign: this.state.text_align}}>My Bike name is {this.props.name}</h1>
            </div>
        );
    }
}

export default Bike;