import React, { Component } from "react";
import { Container, Row, Col, Nav, Navbar, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./moose.css";
export class Conmoose extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <div className="con">
                <h1>contact</h1>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={3} md={6} sm={6}>
              <div className="con2 text-center cbox ">
                <b>Address:</b>
                <div className="text-center">
                  198 West 21th Street, Suite 721 New York NY 10016
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <div className="con2 text-center">
                <b>Phone:</b>
                <div className="text-center"> + 1235 2355 98</div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <div className="con2 text-center">
                <b>Email:</b>
                <div className="text-center">info@yoursite.com</div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <div className="con2 text-center">
                <b>Website:</b>
                <div className="text-center">yoursite.com</div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col>
                  <div>
                    <h1>Contact Us</h1>
                  </div>
                </Col>
              </Row>
              <Form className="mt-3">
                <Row>
                  <Col>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <div className="text-center">
                  <p className="btn-buy">send message</p>
                </div>
              </Form>
            </Col>
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
