import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../feature/counterSlice";
import { Typography, Avatar, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { GetUserDetail } from "../APIfetch/userFetch";

const { Title } = Typography;

//kayaknya mending datanya di fetch dalam satu file sendiri, nanti tinggal panggil file itu tiap butuh fetch
//DAH YANG PALING BENER FETCH DULU MANUAL DARI SINI

// data diambil dari fetch aja dari profile ini
function AppProfile({ userObj }) {
  const count = useSelector((state) => state.counter.value);
  

  // const [username, setUsername] = useState("");

  // setUsername(localStorage.getItem('username'));

  const dispatch = useDispatch();
  console.log("userObj profile");
  console.log(userObj);
  console.log("localStorage.getItem('username')");
  console.log(localStorage.getItem('username'));

  console.log("GetUserDetail");
  
  let userDetail = GetUserDetail();
  
  console.log(userDetail.username + "aaa");
  console.log(userDetail.password + "aaa");
  console.log(userDetail.email + "aaa");

  


  return (
    <div className="container-fluid">
      <div className="profileHolder">
        <div className="blockCenter">
          <Avatar
            shape="square"
            size={{ xs: 70, sm: 70, md: 90, lg: 90, xl: 128 }}
            icon={<UserOutlined />}
          />
        </div>
        <Title level={1} className="titlePage">
          {userDetail.firstname + " " + userDetail.lastname}
        </Title>
        <div className="tableHolder">
          <Title level={3}>Profile Detail</Title>
          <Row className="rowHolder">
            <Col span={8}>Username</Col>
            <Col span={16}>{userDetail.username}</Col>
          </Row>
          <Row className="rowHolder">
            <Col span={8}>Password</Col>
            <Col span={16}>{userDetail.password}</Col>
          </Row>
          <Row className="rowHolder">
            <Col span={8}>firstname</Col>
            <Col span={16}>{userDetail.firstname}</Col>
          </Row>
          <Row className="rowHolder">
            <Col span={8}>Lastname</Col>
            <Col span={16}>{userDetail.lastname}</Col>
          </Row>
          <Row className="rowHolder">
            <Col span={8}>Email</Col>
            <Col span={16}>{userDetail.email}</Col>
          </Row>
          <Row className="rowHolder">
            <Col span={8}>Phone</Col>
            <Col span={16}>{userDetail.phone}</Col>
          </Row>
          <Row className="rowHolder lastRow">
            <Col span={8}>Address</Col>
            <Col span={16}>{userDetail.addressStreet + " " + userDetail.addressNumber + ", " + userDetail.addressCity + ", " + userDetail.addressZipcode}</Col>
          </Row>

        </div>
        <div>
          <button
            aria-label="Increment Value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppProfile;
