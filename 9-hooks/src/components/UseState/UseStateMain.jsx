import React, { useState } from "react";
import "../../App.css";

function Counter() {
  // Declare a state variable `count` with an initial value of 0
  const [count, setCount] = useState(0);

  const increment = () => {
    // Update the state variable `count` by adding 1
    setCount(count + 1);
  };

  const decrement = () => {
    // Update the state variable `count` by subtracting 1
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  // Set button colors based on count value
  const decrementButtonStyle =
    count === 0
      ? {
        backgroundColor: "red",
        margin: "10px",
        padding: "5px",
        border: "20px groove red",
        borderRadius: "5px",
        color: "White"
      }
      : {
        backgroundColor: "green",
        margin: "10px",
        padding: "5px",
        border: "20px groove green",
        borderRadius: "5px",
        color: "White"
      };
  const incrementButtonStyle = {
    backgroundColor: "green",
    margin: "10px",
    padding: "5px",
    border: "20px groove green",
    borderRadius: "5px",
    color: "White"
  };

  return (
    <div id="counter">
      <button onClick={decrement} style={decrementButtonStyle}>
        Decrement
      </button>
      <p>
        {count}
      </p>
      <button onClick={increment} style={incrementButtonStyle}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
