import React, { Component } from "react";
import { Container, Row, Col, Nav, Navbar, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./moose.css";
import ab from "./img/jhonson.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Artmoose } from "./Artmoose";
import { Aboutmoose } from "./Aboutmoose";
import { Conmoose } from "./Contactsmoose";

export class Homemoose extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Nav className="justify-content-end bg-light" activeKey="/home">
              <Nav.Item>
                <Nav.Link className="p-3" id="col">
                  <Link to="/">home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="p-3" id="col">
                  <Link to="Artmoose">art</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="p-3" id="col">
                  <Link to="Aboutmoose">about</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="p-3" id="col">
                  <Link to="Contactsmoose">contact</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Artmoose" element={<Artmoose />} />
              <Route path="Aboutmoose" element={<Aboutmoose />} />
              <Route path="Contactsmoose" element={<Conmoose />} />
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <div>
                <h1 className="text-center font">
                  m<span className="span">oo</span>se
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-3">
          <Row>
            <Col lg={8} md={8} sm={8}>
              <div className=" pad">
                <br />
                <h2 className="">
                  Hello! I'm Giller Moose, I Provide Newest News Update About
                  Digital
                </h2>
                <br />
                <h5>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </h5>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4}>
              <div className="">
                <img src={ab} className="imghome " />
                <h3>
                  <b>Giller Moose</b>
                </h3>
                <h5>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-4">
          <Row className="p-0">
            <Col lg={6} md={6} sm={6}>
              <div>
                <img src={ab} className="img2" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <div className="cd ps">
                <h2 className="hh ">
                  Turing a digital brand into a real world experience{" "}
                </h2>
                <Row className="mt-4">
                  <Col lg={3} md={3} sm={3}>
                    <img src={ab} className="imghome " />
                  </Col>
                  <Col lg={9} md={3} sm={3}>
                    <h4>Jamie Jonson</h4>
                    <p>CEO, PRODUCT DESIGNER</p>
                  </Col>
                </Row>
              </div>
            </Col>
            {/*  */}
            <Col lg={6} md={6} sm={6}>
              <div className="cd ps">
                <h2 className="hh ">
                  Turing a digital brand into a real world experience{" "}
                </h2>
                <Row className="mt-4">
                  <Col lg={3} md={3} sm={3}>
                    <img src={ab} className="imghome " />
                  </Col>
                  <Col lg={9} md={3} sm={3}>
                    <h4>Jamie Jonson</h4>
                    <p>CEO, PRODUCT DESIGNER</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <div>
                <img src={ab} className="img2" />
              </div>
            </Col>
            {/*  */}
            {/*  */}
            <Col lg={6} md={6} sm={6}>
              <div>
                <img src={ab} className="img2" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <div className="cd ps">
                <h2 className="hh ">
                  Turing a digital brand into a real world experience{" "}
                </h2>
                <Row className="mt-4">
                  <Col lg={3} md={3} sm={3}>
                    <img src={ab} className="imghome " />
                  </Col>
                  <Col lg={9} md={3} sm={3}>
                    <h4>Jamie Jonson</h4>
                    <p>CEO, PRODUCT DESIGNER</p>
                  </Col>
                </Row>
              </div>
            </Col>
            {/*  */}
          </Row>
        </Container>

        <Container fluid className="mt-4 cc">
          <Row>
            <Col lg={5} md={5} sm={5}>
              <div className="confooter ps-5 ">
                <h4>MOOSE</h4>
                <div className="mt-4">
                  Far far away, behind the word <br />
                  mountains, far from the countries.
                </div>
              </div>
            </Col>
            <Col lg={2} md={2} sm={2}>
              <div className="confooter ">
                <h4>INFO</h4>
                <div className="mt-3">
                  <ul>
                    <li>
                      <b>></b>Blog
                    </li>
                    <li>
                      <b>></b>Career
                    </li>
                    <li>
                      <b>></b>Team
                    </li>
                    <li>
                      <b>></b>Team
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={5} md={5} sm={5}>
              <div className="confooter ">
                <h4>Have a Questions?</h4>
                <div className="mt-3">
                  203 Fake St. Mountain View, <br />
                  San Francisco, California, USA
                  <p className="mt-2">9977886622</p>
                  <p className="mt-1">info@yourdomain.com </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="foot p-5">
                Copyright ©2022 All rights reserved | This template is made with
                by Colorlib
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
