import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
const { SubMenu } = Menu;

const Navbar = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = e => {
    setCurrent(e.key);
  };
  return (
    <nav className="navbar p-0 text-primary navbar-expand">
      <div className="container">
        <Link className="nav-link text-primary" to="/">
          <h1 className="navbar__title mb-0">Todo List</h1>
        </Link>
        <Menu
          className="ml-auto"
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Link to="/">
              <Icon type="home" />
              Home
            </Link>
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="user" />
                User
              </span>
            }
          >
            <Menu.Item key="login">
              <Link to="/login">
                <Icon type="login" />
                Login
              </Link>
            </Menu.Item>
            <Menu.Item key="register">
              <Link to="/register">
                <Icon type="user-add" />
                Register
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
