import { useState } from "react";
import Inputting from "./Input.jsx";
export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  function handleBlur(identifier) {
    setDidEdit((prevValues) => {
      return { ...prevValues, [identifier]: true };
    });
  }
  const emailInValid = didEdit.email && !enteredValues.email.includes("@");
  function handleInputChange(identifier, event) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value,
    }));
    setDidEdit((prevValues) => {
      return { ...prevValues, [identifier]: false };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("login form submitted");
    console.log("email:" + enteredValues.email);
    console.log("password:" + enteredValues.password);
    setEnteredValues({ email: "", password: "" });
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }
  // function handleEnteredPassword(event) {
  //   setEnteredPassword(event.target.value);
  // }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Inputting
          label="Email"
          id="email"
          name="email"
          onBlur={() => handleBlur("email")}
          onChange={(event) => handleInputChange("email", event)}
          value={enteredValues.email}
        />
        <Inputting
          label="Password"
          id="password"
          name="password"
          onBlur={() => handleBlur("password")}
          onChange={(event) => handleInputChange("password", event)}
          value={enteredValues.password}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}
