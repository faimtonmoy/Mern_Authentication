import React, { useState } from "react";
import useSignUp from "../hooks/useSignUp";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignUp();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
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
      <button disabled={isLoading}>Sign UP</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default Signup;
