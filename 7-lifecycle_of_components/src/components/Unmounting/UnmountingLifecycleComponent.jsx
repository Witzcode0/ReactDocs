import React, { Component, useEffect} from "react";

class UnmountingClassExample extends React.Component {
  componentWillUnmount() {
    console.log("ComponentWillUnmount: Cleaning up resources");
  }

  render() {
    return <h1>Goodbye, React!</h1>;
  }
}

const UnmountingFunctionExample = () => {
  useEffect(() => {
    return () => {
      console.log("Cleaning up resources");
    }; // Cleanup function runs on unmount
  }, []); // Empty dependency array ensures cleanup runs once.

  return <h1>Goodbye, React!</h1>;
};

export { UnmountingClassExample, UnmountingFunctionExample };