import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";


function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const demoUser = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.loginUser({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
              ))}
          </ul>
          <div className="login-form">
            <h2 className="login-title">Login</h2>
            <div className="login-fields">
            <label>
              Username or Email
            </label>
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            <label>
              Password
            </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="button-div">
              <button className="login-submit" type="submit">Log In</button>
              <button className="demo-submit" onClick={(e) => demoUser(e)}>Demo User</button>
            </div>
        </div>
        </form>
      </div>
  );
}

export default LoginForm;