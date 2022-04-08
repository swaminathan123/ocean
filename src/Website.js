import "./web.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  // Button,
  Accordion,
  Carousel,
  Nav,
  Navbar,
  // NavDropdown,
  Form,
  // FormControl,
} from "react-bootstrap";
import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import wave from "./img/wave.png";
import {
  Webabout,
  Webaboutone,
  Webabouttwo,
  Webaboutbox,
  Services,
  Pricing,
  // Team,
} from "./Webdes";
// import ab from "./img/606795.png";
import dd from "./img/img.png";
import first from "./img/anderson.jpg";
import sec from "./img/jepson.jpg";
import third from "./img/jhonson.jpg";
import four from "./img/white.jpg";
//

class Website extends Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Navbar className="bb" expand="lg" fixed="top">
                <Container fluid>
                  <Navbar.Brand href="#" className="p-3" id="col">
                    Selecao
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: "100px" }}
                      navbarScroll
                    ></Nav>
                    <Nav className="justify-content-end" activeKey="/home">
                      <Nav.Item>
                        <Nav.Link href="/home" className="p-3" id="col">
                          Home
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="/home" className="p-3" id="col">
                          About
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="/home" className="p-3" id="col">
                          Services
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="/home" className="p-3" id="col">
                          Pricing
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="/home" className="p-3" id="col">
                          Team
                        </Nav.Link>
                      </Nav.Item>{" "}
                      <Nav.Item>
                        <Nav.Link href="/home" className="p-3" id="col">
                          contact
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            {/* <Col> */}
            <section>
              <Carousel>
                <Carousel.Item className="car">
                  <div className="car1">
                    <h1>Welcome to Selecao</h1>
                    <p className="mt-5">
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam.
                      <br />
                      Occaecati alias dolorem mollitia ut. Similique ea
                      voluptatem.
                      <br /> Esse doloremque accusamus repellendus deleniti vel.
                      Minus et tempore modi architecto.
                    </p>
                  </div>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="car">
                  <div className="car1">
                    <h1>Sequi ea ut et est quaerat</h1>
                    <p className="mt-5">
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam.
                      <br />
                      Occaecati alias dolorem mollitia ut. Similique ea
                      voluptatem.
                      <br />
                      Esse doloremque accusamus repellendus deleniti vel. Minus
                      et tempore modi architecto.
                    </p>
                  </div>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="car">
                  <div className="car1">
                    <h1>Lorem Ipsum Dolor</h1>
                    <p className="mt-5">
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam.
                      <br />
                      Occaecati alias dolorem mollitia ut. Similique ea
                      voluptatem.
                      <br />
                      Esse doloremque accusamus repellendus deleniti vel. Minus
                      et tempore modi architecto.
                    </p>
                  </div>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>

              <div className="wave wave1"></div>
              <div className="wave wave2"></div>
              <div className="wave wave3"></div>
              <div className="wave wave4"></div>
            </section>
            {/* </Col> */}
          </Row>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col>
              <div>
                <Webabout name="about" who="WHO WE ARE" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <div>
                <Webaboutone
                  para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  li1="Ullamco laboris nisi ut aliquip ex ea commodo consequat"
                  li2="Duis aute irure dolor in reprehenderit in voluptate velit"
                  li3="Duis aute irure dolor in reprehenderit in voluptate velit"
                />
              </div>
            </Col>

            <Col lg={6}>
              <div>
                <Webabouttwo para="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={3} md={3} sm={6}>
              <div className="mt-3">
                <Webaboutbox
                  para="Excepteur sint occaecat cupidatat Ullamco laboris"
                  i="fas fa-sun height"
                />
              </div>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <div className="mt-3">
                <Webaboutbox
                  para="Excepteur sint occaecat cupidatat Ullamco laboris"
                  i="fas fa-sun height"
                />
              </div>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <div className="mt-3">
                <Webaboutbox
                  para="Excepteur sint occaecat cupidatat Ullamco laboris"
                  i="fas fa-sun height"
                />
              </div>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <div className="mt-4">
                <Webaboutbox
                  para="Excepteur sint occaecat cupidatat Ullamco laboris"
                  i="fas fa-sun height"
                />
              </div>
            </Col>
          </Row>
        </Container>

        <br />
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div>
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="anas2">
                  <li>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <img src={dd} />
            </Col>
          </Row>
        </Container>
        <br />
        <Container fluid className="action p-5 ">
          <Row>
            <Col lg={9} md={9} sm={12}>
              <Row>
                <Col lg={{ size: 10, offset: 1 }}>
                  <div className="">
                    <h4>Call To Action</h4>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <div className="text-center lg-m-5 sm-m-2 md-m-5 ">
                <p className="mt-5 btn-buy">CALL TO ACTION</p>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
        <Container>
          <Row>
            <Col>
              <div>
                <h3 id="hn" className="color">
                  Services
                </h3>
                <h1>WHAT WE DO OFFER</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4} sm={6}>
              <div className="mt-3" data-aos="fade-right">
                <Services
                  para="Excepteur sint occaecat cupidatat Ullamco laboris"
                  i="fa fa-briefcase"
                />
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} data-aos="fade-right">
              <div className="mt-3">
                <Services
                  para="Excepteur sint occaecat cupidatat Ullamco laboris"
                  i="fa fa-address-card"
                />
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} data-aos="fade-up">
              <div className="mt-3">
                <Services
                  para="Excepteur sint occaecat cupidatat Ullamco laboris"
                  i="fa fa-address-card"
                />
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} data-aos="fade-down">
              <div className="mt-4">
                <Services
                  para="Excepteur sint occaecat cupidatat Ullamco laboris"
                  i="fa fa-binoculars"
                />
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} data-aos="fade-left">
              <div className="mt-4">
                <Services
                  para="Excepteur sint occaecat cupidatat Ullamco laboris"
                  i="fa fa-globe"
                />
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} className="">
              <div className="mt-4 " data-aos="fade-left">
                <Services
                  para="Excepteur sint occaecat cupidatat Ullamco laboris"
                  i="fa fa-clock"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <br />
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div>
                <h3 id="hn" className="color">
                  Pricing
                </h3>
                <h1>OUR COMPETING PRICES</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              lg={{ offset: 0, span: 3 }}
              md={{ offset: 3, span: 6 }}
              sm={{ offset: 3, span: 6 }}
            >
              <div className="mt-5 pricingbox  " id="pbh">
                <Pricing heading="Free" />
              </div>

              <div className="pricingbox text-center ">
                <Pricing one="$0 / month" />

                <Pricing a="Aida dere" />

                <Pricing s="Nec feugiat nisl" />

                <Pricing d="Nulla at volutpat dola" />

                <Pricing f="Pharetra massa" />

                <Pricing g="Massa ultricies mi" />
              </div>

              <div className="pricingbtn pricingbox pricingbutton">
                <p className="btn-buy">buy now</p>
              </div>
            </Col>
            {/*  */}
            <Col
              lg={{ offset: 0, span: 3 }}
              md={{ offset: 3, span: 6 }}
              sm={{ offset: 3, span: 6 }}
            >
              <div className="mt-5 pricingbox " id="pbh">
                <Pricing heading="Business" />
              </div>

              <div className="pricingbox text-center ">
                <Pricing one="$19 / month" />

                <Pricing a="Aida dere" />

                <Pricing s="Nec feugiat nisl" />

                <Pricing d="Nulla at volutpat dola" />

                <Pricing f="Pharetra massa" />

                <Pricing g="Massa ultricies mi" />
              </div>

              <div className="pricingbtn pricingbox pricingbutton">
                <p className="btn-buy">buy now</p>
              </div>
            </Col>
            {/*  */}
            <Col
              lg={{ offset: 0, span: 3 }}
              md={{ offset: 3, span: 6 }}
              sm={{ offset: 3, span: 6 }}
            >
              <div className="mt-5 pricingbox " id="pbh">
                <Pricing heading="Developer" />
              </div>

              <div className="pricingbox text-center ">
                <Pricing one="$29 / month" />

                <Pricing a="Aida dere" />

                <Pricing s="Nec feugiat nisl" />

                <Pricing d="Nulla at volutpat dola" />

                <Pricing f="Pharetra massa" />

                <Pricing g="Massa ultricies mi" />
              </div>

              <div className="pricingbtn pricingbox pricingbutton">
                <p className="btn-buy">buy now</p>
              </div>
            </Col>
            {/*  */}
            <Col
              lg={{ offset: 0, span: 3 }}
              md={{ offset: 3, span: 6 }}
              sm={{ offset: 3, span: 6 }}
            >
              <div className="mt-5 pricingbox " id="pbh">
                <Pricing heading="Ultimate" />
              </div>

              <div className="pricingbox text-center ">
                <Pricing one="49 / month" />

                <Pricing a="Aida dere" />

                <Pricing s="Nec feugiat nisl" />

                <Pricing d="Nulla at volutpat dola" />

                <Pricing f="Pharetra massa" />

                <Pricing g="Massa ultricies mi" />
              </div>

              <div className="pricingbtn pricingbox pricingbutton">
                <p className="btn-buy">buy now</p>
              </div>
            </Col>
          </Row>

          {/*  */}
        </Container>
        <Container className="mt-5">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div>
                <h3 id="hn" className="color">
                  F.A.Q
                </h3>
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Non consectetur a erat nam at lectus urna duis?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Feugiat scelerisque varius morbi enim nunc faucibus a
                    pellentesque?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Tempus quam pellentesque nec nam aliquam sem et tortor
                    consequat?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                    turpis nunc eget lorem dolor?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
        {/* team */}
        <Container className="mt-4">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div>
                <h3 id="hn" className="color">
                  Team
                </h3>
                <h1>OUR HARDWORKING TEAM</h1>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col
              lg={{ offset: 0, span: 3 }}
              md={{ offset: 3, span: 6 }}
              sm={{ offset: 3, span: 6 }}
            >
              <div className="text-center">
                <img src={first} width={"200px"} height={"300px"} />
              </div>
              <div className="mt-3">
                <h4>Walter White</h4>
                <h6 className="color">Chief Executive Officer</h6>
              </div>
            </Col>
            {/*  */}
            <Col
              lg={{ offset: 0, span: 3 }}
              md={{ offset: 3, span: 6 }}
              sm={{ offset: 3, span: 6 }}
            >
              <div className="text-center">
                <img src={sec} width={"200px"} height={"300px"} />
              </div>
              <div className="mt-3">
                <h4> Jepson</h4>
                <h6 className="color">Product Manager</h6>
              </div>
            </Col>
            {/*  */}
            <Col
              lg={{ offset: 0, span: 3 }}
              md={{ offset: 3, span: 6 }}
              sm={{ offset: 3, span: 6 }}
            >
              <div className="text-center">
                <img src={third} width={"200px"} height={"300px"} />
              </div>
              <div className="mt-3">
                <h4>William Anderson</h4>
                <h6 className="color">CTO</h6>
              </div>
            </Col>
            <Col
              lg={{ offset: 0, span: 3 }}
              md={{ offset: 3, span: 6 }}
              sm={{ offset: 3, span: 6 }}
            >
              <div className="text-center">
                <img src={four} width={"200px"} height={"300px"} />
              </div>
              <div className="mt-3">
                <h4>Amanda Jepson</h4>
                <h6 className="color">Accountant</h6>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-4">
          <Row>
            <Col lg={4} md={4} sm={4}>
              <div>
                <h4> Location:</h4>

                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
              <div>
                <h4> Email</h4>

                <p>info@example.com</p>
              </div>
              <div>
                <h4>call </h4>

                <p>+1 5589 55488 55s</p>
              </div>
            </Col>
            <Col lg={8} md={8} sm={8}>
              <Form>
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
        <Container fluid className="action mt-4">
          <Row>
            <Col>
              <div className="text-center">
                <h3 className="mt-3">Selecao</h3>
                <p className="mt-4">
                  Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis
                  magni eligendi fuga maxime saepe commodi placeat.
                </p>
                <p className="mt-2">© Copyright Selecao. All Rights Reserved</p>
                <p className="mt-2">Designed by swaminathan</p>
              </div>
              {/* <div className="text-center"> */}

              {/* </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Website;
