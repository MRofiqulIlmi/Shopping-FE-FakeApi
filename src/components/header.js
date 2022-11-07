import React from "react";
import { Button, Avatar, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { bindActionCreators } from "@reduxjs/toolkit";
import {GetUserDetail} from "../APIfetch/userFetch";

// harusnya nama nya di fetch langsung biar reload pun tetep bisa tapi usernamenya disimpen di local

function AppHeader({
  token,
  setToken
}) {

  let userDetail = token?GetUserDetail():null;

  const logOutHandler = () => {
    setToken("");
    
    localStorage.clear();
  };

  const statusList = (
    <div>
      <Link to="/product">
        <p>Product</p>
      </Link>
      <Link to="/profile">
        <p>Profile</p>
      </Link>
      <Link to="/changepassword">
        <p>Change Password</p>
      </Link>
      <Button onClick={() => logOutHandler()}>LogOut</Button>
    </div>
  );

  const userTitle = token?<p>{userDetail.firstname + " " + userDetail.lastname}</p>: <div></div>;

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <a href="#">YOLO</a>
        </div>

        {token ? (
          <Popover
            placement="bottom"
            title={userTitle}
            content={statusList}
            trigger="click"
          >
            <Avatar size="large" icon={<UserOutlined />} />
          </Popover>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default AppHeader;
