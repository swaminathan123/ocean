import react, { Component, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./schoollogin.css";
import Axios from "axios";
import school from "./img/swami.png";
import google from "./img/google.png";

function Schoollogin() {
  // const url:"";
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    // Axios.post(url,{
    Axios.post({
      email: data.email,
      password: data.password,
    }).then((res) => {
      console.log(res.data);
    });
  }

  function changeHandler(e) {
    const arr = { ...data };
    arr[e.target.id] = e.target.value;
    setData(arr);
    console.log(arr);
  }

  return (
    <>
      <Container className="full mt-5 p-5">
        <Row className="total-div">
          <Col lg={6} md={6} sm={12} className="p-0">
            <div className="con ">
              <img
                src={school}
                alt=""
                height={200}
                width={500}
                className="img-fluid imgmt"
              />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="p-0">
            <div className="con1 ps-5 ">
              <h5 className="mar">Log in.</h5>
              <h4>Welcome Back..!</h4>
              <Form onSubmit={(e) => submit(e)}>
                <Row>
                  <Col className="mt-3">
                    <Form.Label>Mail ID</Form.Label>
                    <Form.Control
                      type="email"
                      className="box"
                      placeholder="example@gmail.com"
                      value={data.email}
                      id="email"
                      onChange={changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      className="box"
                      type="password"
                      placeholder="password"
                      id="password"
                      value={data.password}
                      onChange={changeHandler}
                    />
                    <p className="txtend">Forgot Password?</p>
                  </Col>
                </Row>
              </Form>
              <div className="d-grid gap-2">
                <Button variant="" className="logbtn" size="md">
                  LOG IN
                </Button>
              </div>

              <div className="hr">
                <h5>or</h5>
              </div>

              <div className="d-grid gap-2 mt-3">
                <Button className="logbtn1" size="md">
                  <img
                    src={google}
                    alt=""
                    height={20}
                    width={20}
                    className="img-fluid me-3 mb-1"
                  />
                  Continue with Google
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Schoollogin;
