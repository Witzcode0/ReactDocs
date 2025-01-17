import React, { Component } from "react";

class AllLifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor: Initializing state or props");
  }

  // Mounting Phase: Invoked after the component is mounted
  componentDidMount() {
    console.log("ComponentDidMount: Component has been mounted");
  }

  // Updating Phase: Decide whether to re-render the component
  shouldComponentUpdate(nextProps, nextState) {
    console.log("ShouldComponentUpdate: Deciding whether to re-render");
    // Allow re-rendering
    return true;
  }

  // Updating Phase: Capture a snapshot before the DOM is updated
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("GetSnapshotBeforeUpdate: Before the DOM is updated");
    return { previousCount: prevState.count }; // Example snapshot
  }

  // Updating Phase: Invoked after the component is updated
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("ComponentDidUpdate: Component has been updated");
    console.log("Previous State: ", prevState);
    console.log("Snapshot: ", snapshot);
  }

  // Unmounting Phase: Invoked before the component is destroyed
  componentWillUnmount() {
    console.log("ComponentWillUnmount: Cleaning up before unmounting");
  }

  // Render Phase: Responsible for rendering the component
  render() {
    console.log("Render: Component is rendering");
    return (
      <div>
        <h1>React all Lifecycle Example</h1>
        <p>Count: {this.state.count}</p>
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

export default AllLifecycleExample;
