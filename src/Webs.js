import "./web.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "reactstrap";
import React, { Component } from "react";
import icon from "./img/606795.png";
import ab from "./img/img.png";
class Web extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="about">ABOUT</div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="we">
                <h1>WHO WE ARE</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <br></br>

                <ul>
                  <li>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </li>
                  <li>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </li>
                  <li>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
                <Button className="btn-secondary">Learn More</Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mar">
          <Row>
            <Col lg={3} md={3} sm={6} className="b1">
              <Row>
                <Col lg={3} md={3} sm={3}>
                  <div>
                    <img
                      className="bim"
                      src={icon}
                      height={"30px"}
                      width={"30px"}
                    />
                  </div>
                </Col>
                <Col lg={9} md={9} sm={9}>
                  <h5 className="bim">Ullamco laboris nisi ali</h5>
                </Col>
              </Row>
            </Col>
            <Col lg={3} md={3} sm={6} className="b1">
              <Row>
                <Col lg={3} md={3} sm={3}>
                  <div>
                    <img
                      className="bim"
                      src={icon}
                      height={"30px"}
                      width={"30px"}
                    />
                  </div>
                </Col>
                <Col lg={9} md={9} sm={9}>
                  <h5 className="bim">Ullamco laboris nisi ali</h5>
                </Col>
              </Row>
            </Col>
            <Col lg={3} md={3} sm={6} className="b1">
              <Row>
                <Col lg={3} md={3} sm={3}>
                  <div>
                    <img
                      className="bim"
                      src={icon}
                      height={"30px"}
                      width={"30px"}
                    />
                  </div>
                </Col>
                <Col lg={9} md={9} sm={9}>
                  <h5 className="bim">Ullamco laboris nisi ali</h5>
                </Col>
              </Row>
            </Col>
            <Col lg={3} md={3} sm={6} className="b1">
              <Row>
                <Col lg={3} md={3} sm={3}>
                  <div>
                    <img
                      className="bim"
                      src={icon}
                      height={"30px"}
                      width={"30px"}
                    />
                  </div>
                </Col>
                <Col lg={9} md={9} sm={9}>
                  <h5 className="bim"> ✓ Ullamco laboris nisi ali</h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container className="mar">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>✓ Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>
                ✓ Duis aute irure dolor in reprehenderit in voluptate velit.
              </p>
              <p>
                ✓ Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <img src={"ab"} width={"30px"} height={"30px"} />
            </Col>
          </Row>
        </Container>
        <Container fluid className="action">
          <Row>
            <Col lg={9} md={9} sm={12}>
              <div className="m1">
                <h4>Call To Action</h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <div>
                <Button className="text-center">CALL TO ACTION</Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="we">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="about">SERVICES</div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="we">
                <h1>WHAT WE DO OFFER</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4} sm={12} className="sb"></Col>
            <Col lg={4} md={4} sm={12} className="sb"></Col>
            <Col lg={4} md={4} sm={12} className="sb"></Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col lg={4} md={4} sm={12} className="sb"></Col>
            <Col lg={4} md={4} sm={12} className="sb"></Col>
            <Col lg={4} md={4} sm={12} className="sb"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Web;
//
