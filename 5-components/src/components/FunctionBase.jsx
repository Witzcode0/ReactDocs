import React from "react";

function GreetingFunc(props) {
  return <h1>Hello, {props.firstname} {props.lastname}!</h1>;
}

export default GreetingFunc;