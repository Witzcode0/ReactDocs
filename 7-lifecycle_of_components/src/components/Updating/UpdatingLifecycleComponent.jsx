import React, { Component, useState, useEffect } from "react";

class UpdatingClassExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate() {
    // return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("ComponentDidUpdate: State or props have changed");
      console.log("Previous State: ", prevState);
      console.log("Current State: ", this.state);
    }
  }

  render() {
    console.log("Render: Component is rendering");
    return (
      <div>
        <h1>Updating using Class component: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}


const UpdatingFunctionExample = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      console.log('Count state changed');
    }, [count]); // Runs whenever 'count' changes.
  
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  };

export { UpdatingClassExample, UpdatingFunctionExample };
