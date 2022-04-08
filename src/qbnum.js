import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./qbfooter.css";
import React, { Component } from "react";
import qbone from "./img/qb1.png";
import qbtwo from "./img/qb2.png";
import qbthree from "./img/qb3.png";
import qbfour from "./img/qb4.png";
import qbfive from "./img/qb5.png";

export class Qbnum extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={3} md={3} sm={6}>
              <div className="blue">25K+</div>
              <h4 className="text-center">TEACHERS</h4>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <div className="pink">1500+</div>
              <h4 className="text-center">SCHOOLS</h4>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <div className="violet">10K+</div>
              <h4 className="text-center">PARENTS</h4>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <div className="dark">1000+</div>
              <h4 className="text-center">TUITION CENTERS</h4>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export class Qbpaper extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <h1 className="ppblue">QB365 Question Paper Preparation</h1>
              <h1 className="pporage">Software for Educational Institutions</h1>
              <div className="ppcontent">
                <p>
                  QB365 Unique Question Bank Creation and Question Paper
                  Preparation Software for Educational Institutions [ Schools /
                  Colleges / Universities / Training Center / Coaching Classes /
                  Corporate Training, Tuition Centers and Home Tutors ] in India
                  and Worldwide.
                </p>
                <p>
                  QB365 online application software helps our teachers for
                  question paper preparation / setting works for conducting
                  daily, weekly , periodically and monthly test and saves their
                  valuable time of our teachers.
                </p>
                <p>
                  QB365 Question Paper Preparation Software Live Demo / Free
                  Trial available for evaluation and testing before purchase.
                </p>
                <p>
                  Initiation of this software leads us to construct the question
                  bank in your regional languages in a comfortable manner. [
                  Multi Language Support ].
                </p>
                <p className="ppend">
                  Valuable features enabled to add & retrieve the question paper
                  framing in an effective mode by categorizing the questions
                  under different difficulty levels
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export class Qbwhy extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col
              lg={{ span: 6, offset: 0 }}
              md={{ span: 6, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
            >
              <h3 className="qbwhy">Why Choose QB365?</h3>
              <Row>
                <Col lg={4} md={4} sm={{ span: 6, offset: 0 }}>
                  <img
                    src={qbone}
                    height={"80px"}
                    width={"80px"}
                    className="img-fluid "
                    id="qbimgone"
                    alt="qbone "
                  />
                  <p id="qbimgone">500000+ Questions with Answers</p>
                </Col>
                <Col lg={4} md={4} sm={{ span: 6, offset: 0 }}>
                  <img
                    src={qbtwo}
                    height={"80px"}
                    width={"80px"}
                    className="img-fluid"
                    alt="qbtwo "
                    id="qbimgone"
                  />
                  <p id="qbimgone">
                    Trusted by 25000+ Teachers & 1500+ Schools
                  </p>
                </Col>
                <Col lg={4} md={4} sm={{ span: 6, offset: 0 }}>
                  <img
                    src={qbthree}
                    height={"80px"}
                    width={"80px"}
                    className="img-fluid"
                    alt="qbthree "
                    id="qbimgone"
                  />
                  <p id="qbimgone">100% Data security</p>
                </Col>
                <Col lg={4} md={4} sm={{ span: 6, offset: 0 }}>
                  <img
                    src={qbfour}
                    height={"80px"}
                    width={"80px"}
                    className="img-fluid"
                    alt="qbfour "
                    id="qbimgone"
                  />
                  <p id="qbimgone">
                    Start Free trail before Subscribing our Software
                  </p>
                </Col>
                <Col lg={4} md={4} sm={{ span: 6, offset: 0 }}>
                  <img
                    src={qbfive}
                    height={"80px"}
                    width={"80px"}
                    className="img-fluid"
                    alt="qbfive "
                    id="qbimgone"
                  />
                  <p id="qbimgone">We Deliver Best Quality with Expertise</p>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h6 className="qbwhy1">
                QB365 Question Paper Preparation Software Suitable for
                Educational Institutions / Schools like
              </h6>
              <p className="qbwhy2">
                Government Schools , Public & Private Schools , CBSE Schools ,
                Aided Schools, Anglo Indian Schools, Matriculation School, ICSE
                Board Schools, State Board Schools , Residential / Boarding /
                International Schools , Montessori Schools , Primary / Upper
                Primary & Nursery / Kids Schools , Rural / Urban Schools ,
                Secondary and Higher Secondary Schools , Training Centres and
                Coaching Classes , Tuition Centers, Autonomous schools , Central
                Tibetan Schools Administration (CTSA) , Kendriya Vidyalaya
                Sangathan ( KVS ) , National Council of Educational Research &
                Training ( NCERT ) , National Institute of Open Schooling (NIOS)
                , Navodaya Vidyalaya Samiti (NVS) , National Bal Bhavan
              </p>
              <h6 className="qbwhy3">Related Tags</h6>
              <p className="qbwhy2">
                Question Software , Question Bank Software, School Question Bank
                Software, College Question Bank Software, Question Bank Software
                Free Trial, Question Bank for Schools, Question Bank Software
                India, Question Bank Software Institute, Question Bank for
                Colleges, School Question Bank, Question Bank for Educational
                Institute, Question Paper Preparation Software, Question Paper
                Setting, School Question Bank Software , Multilanguage Question
                Paper Creator SW, Question Paper Maker Software for Schools,
                CBSE Schools, Stateboard Schools, Schools in Abroad.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
