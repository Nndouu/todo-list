import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    password2: ""
  });

  const { username, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  //Register User
  // const register = async formData => {
  //   const config = {
  //     headers: {
  //       "Content-type": "application/json"
  //     }
  //   };
  //   try {
  //     const res = await axios.post("/api/users", formData, config);
  //     dispatch({
  //       type: REGISTER_SUCCESS,
  //       payload: res.data
  //     });
  //     loadUser();
  //   } catch (err) {
  //     dispatch({
  //       type: REGISTER_FAIL,
  //       payload: err.response.data.msg
  //     });
  //   }
  // };

  const onSubmit = e => {
    e.preventDefault();
    if (username === "" || password === "") {
      // setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      // setAlert("Passwords do not match", "danger");
    } else {
      // register({
      //   username,
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
                  minLength="6"
                  required
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password2"
                  value={password2}
                  onChange={onChange}
                  className="form-control"
                  placeholder="Confirm your password"
                  aria-label="Password"
                  minLength="6"
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
