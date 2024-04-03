import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  loginFailureAction,
  loginRequestAction,
  loginSuccessAction,
} from "../Redux/Authentication/action";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = () => {
    let userInfo = {
      email,
      password,
    };

    // console.log(userInfo);
    dispatch(loginRequestAction());
    axios
      .post("https://reqres.in/api/login", userInfo)
      .then((res) => {
        console.log(res.data.token);
        dispatch(loginSuccessAction(res.data.token));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(loginFailureAction());
      });
      alert("Login Successfull..")
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
