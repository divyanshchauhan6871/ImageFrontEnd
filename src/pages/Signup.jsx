import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addNewUser = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://imagebackend-zj66.onrender.com`, {
      method: "POST",
      body: JSON.stringify({
        email: e.target[0].value,
        password: e.target[1].value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    if (data.status === "success") navigate("/login");
    else alert(data.msg);
  };

  return (
    <form onSubmit={addNewUser}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
      />
      <br></br>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <br></br>
      <button type="submit">SignUp</button>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </form>
  );
};

export default Signup;
