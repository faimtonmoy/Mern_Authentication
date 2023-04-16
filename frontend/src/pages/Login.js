import React, { useState } from "react";
import useLogIn from "../hooks/useLogIn";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, error, isLoading}= useLogIn();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password)
  };
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button disabled={isLoading}>Log In</button>
      {error && <div className="error">{error}</div>}

    </form>
  );
}

export default Login;
