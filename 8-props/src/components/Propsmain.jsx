import React, { Component } from "react";
import PropTypes from "prop-types";

// 1. Passing Props to Components
// const Greeting = (props) => {
//     console.log(props);
//     return (
//         <div>
//             Hello, {props.name}!
//         </div>
//     )
// }

// 2. Props as Objects
// const Greeting = (props) => {
//     console.log(props);
//     return (
//         <div>
//             Hello, {props.name}. You are {props.age} years old.
//         </div>
//     )
// }

// 3. Destructuring Props
// const Greeting = ({name, age}) => {
//     console.log(name, age);
//     return (
//         <div>
//             Hello, {name}. You are {age} years old.
//         </div>
//     )
// }

// 4. Default Props
// const Greeting = ({name}) => {

//     console.log(name);
//     return (
//         <div>
//             Hello, {name}.
//         </div>
//     )
// }
// Assign defaultProps (Deprecated for function components)
// Greeting.defaultProps = {
//     name: "Brijesh",
// };

// export default Greeting;

// 5. Passing Functions as Props
// const Button = ({handleClick}) => {
//     return (
//         <button onClick={handleClick}>Click Me</button>
//     )
// };

// export default Button;

// 6. Passing Objects & Arrays as Props
// const Person = ({people}) => {
//     console.log(people);
//     return (
//         <div>
//             {people.map((person) => (
//                 <div data-key={person.id}>
//                     <h3>{person.name}</h3>
//                     <p>Age: {person.age}</p>
//                     <p>Hobbies: {person.hobbies.join(", ")}</p>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default Person;

// 7. Props in Class Components
// class Greeting extends Component {
//   render() {
//     return (
//       <h1>
//         Hello, {this.props.name}!
//       </h1>
//     );
//   }
// }

// export default Greeting;

// 8. PropTypes for Type Checking
const Greeting = ({ name, age }) => {
  return (
    <h1>
      Hello, {name}. You are {age} years old.
    </h1>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};

export default Greeting;