import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Nav, Navbar } from "reactstrap";
import "./subash.css";
import "./prj.css";
import "./anas.css";
import top_light from "./img/toplight.png";
import table from "./img/table-set.png";

import Form from "react-bootstrap/Form";
// import { IconName } from "react-icons/gr";
import map from "./img/map.jpeg";

class Contact1 extends Component {
  render() {
    return (
      <div>
        <Container fluid className="mt-5">
          <Row className="row-background">
            <Col lg={12} md={12} sm={12}>
              <div className="d-flex justify-content-center pic-block">
                <img src={top_light} alt="" />
                <img src={top_light} alt="" />
                <img src={top_light} alt="" />
              </div>
              <div className="d-flex justify-content-center text-block ">
                <h1>Welcome To</h1>
              </div>
              <div className="d-block text-center heading-block">
                <h2>CAFE HOUSE</h2>
                <p className="padding">
                  Cafe House template is a mobile-friendly responsive Bootstrap
                  v3.3.5 layout by templatemo. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculusnec quam felis,
                  ultricies nec, pellentesque eu, pretium quis, sem.
                </p>
              </div>
              <div className="mt-5 text-center">
                <a href="#" className="buttonpic">
                  DETAILS
                </a>
              </div>

              <div className="text-center">
                <img src={table} className="img-fluid" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={12}>
              <div>
                <h2>Send us a message</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12} xxl={6} xl={6}>
              <div className="mt-3">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      className="box"
                      placeholder="NAME"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      className="box"
                      placeholder="EMAIL"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="text"
                      className="box"
                      placeholder="SUBJECT"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control
                      type="text"
                      className="Boxes"
                      placeholder="MESSAGE"
                    />
                  </Form.Group>
                  <Button className="box2" variant="primary" type="Button">
                    SEND MESSAGE
                  </Button>
                </Form>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} xxl={6} xl={6}>
              <div>
                <img src={map} />
              </div>
            </Col>
          </Row>
        </Container>

        <div>
          <Container fluid>
            <Row className="bg-dark p-5 mt-5">
              <Col lg={3} md={3} sm={12} xs={12} xxl={3} xl={3}>
                <div className="foot">
                  <h4>MAIN MENU</h4>
                  <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>DIRECTORY</li>
                    <li>BLOG</li>
                    <li>OUR SERVICES</li>
                  </ul>
                </div>
              </Col>

              <Col lg={5} md={5} sm={12} xs={12} xxl={5} xl={5}>
                <div className="foot">
                  <h3>About Us</h3>
                  <p>
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                    feugiat a, tellus. Phasellus viverra nulla ut metus varius
                    laoreet.
                  </p>
                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus.
                  </p>
                </div>
              </Col>

              <Col lg={4} md={4} sm={12} xs={12} xxl={4} xl={4}>
                <div className="foot">
                  <h3>Get Social</h3>
                  <p>
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim. Aliquam lorem ante.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <footer>
          <div className="end">
            <p>Copyright © 2084 Your Cafe House</p>
          </div>
        </footer>
      </div>
    );
  }
}
export default Contact1;
