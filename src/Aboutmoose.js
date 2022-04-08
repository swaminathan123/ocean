import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./moose.css";
import ab from "./img/jhonson.jpg";

export class Aboutmoose extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <div className="con">
                <h1>About </h1>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="about1">
          <Row>
            <Col lg={4} md={4} sm={4}>
              <div className="ps-4">
                <img src={ab} className="imghome " />
              </div>

              <div className="mt-3 ps-4">
                <h4>Jamie Jonson</h4>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </Col>
            <Col lg={8} md={8} sm={8}>
              <div>
                <h1>
                  Hello! I'm Giller Moose, I Provide Newest News Update About
                  Digital
                </h1>
                <br />
                <h5>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </h5>
                <br />
                <h5>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </h5>
                <br />
                <h5>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </h5>
                <br />
                <br />
                <h1>How I Work</h1>
                <br />
                <h5>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="about1">
          <Row>
            <Col>
              <div className="text-center">
                <h1>Subscribe to our Newsletter</h1>
              </div>
              <Row>
                <Col
                  lg={{ offset: 3, span: 6 }}
                  md={{ offset: 3, span: 6 }}
                  sm={12}
                >
                  <div className="mt-3">
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <Button variant="outline-secondary" id="button-addon2">
                        Button
                      </Button>
                    </InputGroup>
                  </div>
                </Col>
              </Row>
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
