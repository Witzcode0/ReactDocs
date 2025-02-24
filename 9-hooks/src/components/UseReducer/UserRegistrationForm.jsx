import React, { useReducer } from "react";

// Step:2 - Reducer function to handle state changes
const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return { username: "", email: "", password: "", confirmPassword: "" };
    default:
      return state;
  }
};

// Step:3 - Initial state
const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function UserRegistrationForm() {
  // Step:1 - useReducer Hook
  const [formState, dispatch] = useReducer(formReducer, initialState);



  // Step:5 - Event handlers for form fields
  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  // Step:6 - Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formState);
    dispatch({ type: "RESET" });
  };

  return (
    <>
      {/* Step:4 */}
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Username: </td>
              <td>
                <input
                  type="text"
                  name="username"
                  value={formState.username}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Email: </td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Password: </td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Confirm Password: </td>
              <td>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formState.confirmPassword}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Register</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}

export default UserRegistrationForm;
