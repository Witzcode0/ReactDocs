import React, { Component } from 'react';

class ToggleChangestate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background_color: 'darkgreen',
      font_color: 'orange',
      text: 'Toggle State',
    };
  }

  toggleState = () => {
    this.setState((prevState) => ({
      font_color: prevState.font_color === 'orange' ? 'pink' : 'orange',
      background_color: prevState.background_color === 'darkgreen' ? 'yellow' : 'darkgreen',
    }));
  };

  render() {
    return (
      <div>
        <h1
          style={{
            color: this.state.font_color,
            backgroundColor: this.state.background_color,
          }}
        >
          {this.state.text}
        </h1>
        <button onClick={this.toggleState}>Toggle Color</button>
      </div>
    );
  }
}

export default ToggleChangestate;
