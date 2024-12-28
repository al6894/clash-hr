"use client";
import React, { useState } from "react";
import "../css/RegisterForm.css";
import { CgEnter } from "react-icons/cg";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("User registered successfully!");
      } else {
        setMessage(result.error || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Failed to register. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="wrapper">
        <h2>Register</h2>
        <div className="second-wrapper">
          <label style={{ marginBottom: "10px" }}>
            Enter your details below to register a new account:
          </label>
          <div className="third-wrapper">
            <div className="fields">
              <label>ClashHR Username*:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="fields">
              <label>Email Address (Optional):</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="fields">
              <label>Password*:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="fields">
              <label>Confirm Password*:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="register" type="submit">
              Register
            </button>
            {message && <p>{message}</p>}

            <br></br>
            <label style={{ marginLeft: "12vw" }}>OR</label>
            <br></br>

            <button className="login" type="submit">
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
