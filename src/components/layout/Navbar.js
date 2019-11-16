import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Navbar = () => {
  return (
    <nav className="navbar text-primary navbar-expand">
      <div className="container">
        <Link className="nav-link text-primary" to="/">
          <h1 className="mb-0">Todo List</h1>
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/register">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
