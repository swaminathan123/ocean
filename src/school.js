import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./school.css";
import school from "./img/test.png";
class School extends Component {
  render() {
    return (
      <>
        <OwlCarousel
          items={1}
          className="owl-theme"
          loop
          autoplay
          nav
          margin={8}
        >
          <div>
            <Container className="con">
              <Row>
                <Col
                  lg={{ span: 6, order: 0 }}
                  md={{ span: 6, order: 0 }}
                  sm={{ span: 12, order: 2 }}
                >
                  <div>
                    <h2 className="size">SEARCH YOUR FAVORITE COURSE HERE</h2>
                    <h6 className="text">
                      TOP NOTCH COURSES FROM TRAINED PROFESSIONALS
                    </h6>
                    <center>
                      <button className="btn" variant="light">
                        GET START
                      </button>
                    </center>
                  </div>
                </Col>
                <Col
                  lg={{ span: 6, order: 0 }}
                  md={{ span: 6, order: 0 }}
                  sm={{ span: 12, order: 1 }}
                >
                  <div className="bg">
                    <img
                      src={school}
                      width={600}
                      alt=""
                      className={"img-fluid"}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {/*  */}
          {/*  */}
          <div>
            <Container>
              <Row>
                <Col
                  lg={{ span: 6, order: 0 }}
                  md={{ span: 6, order: 0 }}
                  sm={{ span: 12, order: 1 }}
                >
                  <div className="bg">
                    <img
                      src={school}
                      width={600}
                      alt=""
                      className={"img-fluid"}
                    />
                  </div>
                </Col>
                <Col
                  lg={{ span: 6, order: 0 }}
                  md={{ span: 6, order: 0 }}
                  sm={{ span: 12, order: 2 }}
                >
                  <div>
                    <h2 className="size">SEARCH YOUR FAVORITE COURSE HERE</h2>
                    <h6 className="text">
                      TOP NOTCH COURSES FROM TRAINED PROFESSIONALS
                    </h6>
                    <center>
                      <button className="btn" variant="light">
                        GET START
                      </button>
                    </center>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {/*  */}
          {/*  */}
          <div>
            <Container>
              <Row>
                <Col
                  lg={{ span: 6, order: 0 }}
                  md={{ span: 6, order: 0 }}
                  sm={{ span: 12, order: 2 }}
                >
                  <div>
                    <h2 className="size">SEARCH YOUR FAVORITE COURSE HERE</h2>
                    <h6 className="text">
                      TOP NOTCH COURSES FROM TRAINED PROFESSIONALS
                    </h6>
                    <center>
                      <button className="btn" variant="light">
                        GET START
                      </button>
                    </center>
                  </div>
                </Col>
                <Col
                  lg={{ span: 6, order: 0 }}
                  md={{ span: 6, order: 0 }}
                  sm={{ span: 12, order: 1 }}
                >
                  <div className="bg">
                    <img
                      src={school}
                      width={600}
                      alt=""
                      className={"img-fluid"}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </OwlCarousel>
      </>
    );
  }
}
export default School;
