import React, { useState } from "react";
import { Button } from "antd";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const { username, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (username === "" || password === "") {
      // setAlert("Please fill in all fields", "danger");
    } else {
      // login({
      //   email,
      //   password
      // });
    }
  };

  return (
    <div className="register-form text-center">
      <div className="row mt-5">
        <div className="col-lg-5 col-md-8  m-auto p-0">
          <div className="register-form__wrapper">
            <h2 className="text-center text-primary pt-3">Register</h2>
            <form onSubmit={onSubmit} className="m-4">
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={onChange}
                  className="form-control input-box"
                  placeholder="Enter your username "
                  aria-label="Enter your username"
                  required
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  className="form-control"
                  placeholder="Enter your password"
                  aria-label="Password"
                  required
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  className="form-control"
                  placeholder="Confirm your password"
                  aria-label="Password"
                  required
                ></input>
              </div>
              <input
                type="submit"
                value="Register"
                className="btn btn-primary mt-3"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
