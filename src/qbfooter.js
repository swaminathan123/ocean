import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./qbfooter.css";
import React, { Component } from "react";
class Qbfooter extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={4} md={4} sm={12}>
              <h2 className="textsowhat">So what are you waiting for?</h2>
              <div>
                Begin your free trial today Request your personalized demo and
                we'll be in touch soon!
              </div>
              <div className="point">
                <span className="tick"> ✔ </span> We respect your privacy. NO
                SPAM No selling your personal data.
              </div>
              <div>
                <span className="tick"> ✔ </span>We will respond to your query &
                collect further details within 24 hours. Guaranteed!
              </div>
            </Col>
            <Col lg={7} md={7} sm={12}>
              <h4 className="font">BEGIN YOUR FREE TRIAL TODAY</h4>
              <div className="box">
                <Form className="mt-3">
                  <Row>
                    <Col>
                      <Form.Control placeholder="School Name" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Name" />
                    </Col>
                  </Row>
                </Form>

                <Form className="mt-3">
                  <Row>
                    <Col>
                      <Form.Control placeholder="Email" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Mobile Number" />
                    </Col>
                  </Row>
                </Form>
                <Form className="mt-3 inputbox">
                  <Row>
                    <Col>
                      <Form.Control placeholder="City" />
                    </Col>
                  </Row>
                </Form>
                <Form className="textbox">
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Your Interest "
                    />
                  </Form.Group>
                </Form>

                <Form className="mt-3 captcha">
                  <Row>
                    <Col>
                      <Form.Control placeholder="Enter Captcha" />
                    </Col>
                  </Row>
                </Form>
                <Button className="btnsubmit" variant="success">
                  SUMBIT
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="footerbg">
          <Row>
            <Col lg={8} md={8} sm={12} className="footer">
              Support & Help&nbsp;&nbsp;Study Material&nbsp;&nbsp;Entrance Exam
              India&nbsp;&nbsp;CBSE & Stateboard Study Material&nbsp;
              &nbsp;Question and Answers&nbsp;&nbsp;Our Clients&nbsp;
              &nbsp;Privacy Policy &nbsp;&nbsp;Terms & Conditions&nbsp;
              &nbsp;Contanct Us&nbsp;&nbsp; About Us
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div className="copyright">
                © Copyright 2015 - 2020 Linlax . All Rights Reserved.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Qbfooter;
