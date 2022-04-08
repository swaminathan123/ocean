import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";
import React, { Component } from "react";
import "./prj.css";
import top_light from "./img/toplight.png";
import table from "./img/table-set.png";
import "./anas.css";
import "./subash.css";
import prj from "./img/1.jpg";
import divimg from "./img/menu-1.jpg";
import { Div } from "./prjdes";

export class Variety extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Navbar className="nav" expand="lg" fixed="top">
                <Container fluid>
                  <Navbar.Brand href="#" className="p-3" id="col">
                    Coffee Day
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
                          Today Special
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="/home" className="p-3" id="col">
                          Menu
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
        {/*  */}
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
        {/*  */}
        <Container className="c">
          <Row>
            <Col lg={9} md={12} sm={12}>
              <div className="">
                <h2 className="text">Variety of Menus</h2>
                <h1>Cafe House</h1>
                <p>
                  This is free HTML5 website template from templatemo.
                  Fndimentum rhoncus, sem quam semper libero, sit amet
                  adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
                  luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et
                  ante tincidunt tempus. Donec vitae sapien ut libero venenatis
                  faucibus. Ettiam sit amet orci eget eros faucibus tincidunt.
                </p>
                <button className="bt">read more</button>
              </div>
            </Col>
            <Col lg={3} md={12} sm={12}>
              <img className="fimg" src={prj} />
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div>
                <h2 className="text">Our Menus</h2>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col
              lg={{ offset: 0, span: 3 }}
              md={{ offset: 0, span: 3 }}
              sm={{ offset: 3, span: 6 }}
            >
              <div className="ulli">
                <ul className="p-2">
                  <li>AFFOGATO</li>
                  <li>CAFFE LATTE</li>
                  <li>CAFFE AMERICANO</li>
                  <li>COFFEE MILK</li>
                  <li>CAFE MOCHA</li>
                  <li>CAPPUCCINO</li>
                  <li>ESPRESSO</li>
                  <li>ICED COFFEE</li>
                  <li>INSTANT COFFEE</li>
                  <li>MOCHA</li>
                  <li>BLACK COFFEE</li>
                </ul>
              </div>
            </Col>
            <Col lg={9} md={9} sm={12}>
              <Row className="box">
                <Col lg={3} md={3} sm={3}>
                  <div className="p-3">
                    <img src={divimg} />
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div className="p-3">
                    <Div h="Americano 1" />
                  </div>
                  <div className="t">
                    <Div para="Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum." />
                  </div>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <div className="num p-3 m">
                    <Div i="30" />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={9} md={9} sm={12} className="ml">
              <Row className="box">
                <Col lg={3} md={3} sm={3}>
                  <div className="p-3">
                    <img src={divimg} />
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div className="p-3">
                    <Div h="Americano 1" />
                  </div>
                  <div className="t">
                    <Div para="Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum." />
                  </div>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <div className="num p-3 m">
                    <Div i="30" />
                  </div>
                </Col>
              </Row>
            </Col>
            <br />
            <Col lg={9} md={9} sm={12} className="mll">
              <Row className="box">
                <Col lg={3} md={3} sm={3}>
                  <div className="p-3">
                    <img src={divimg} alt="" />
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div className="p-3">
                    <Div h="Americano 1" />
                  </div>
                  <div className="t">
                    <Div para="Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum." />
                  </div>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <div className="num p-3 m">
                    <Div i="30" />
                  </div>
                </Col>
              </Row>
            </Col>
            <br />
            <Col lg={9} md={9} sm={12} className="mll">
              <Row className="box">
                <Col lg={3} md={3} sm={3}>
                  <div className="p-3">
                    <img src={divimg} />
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div className="p-3">
                    <Div h="Americano 1" />
                  </div>
                  <div className="t">
                    <Div para="Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum." />
                  </div>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <div className="num p-3 m">
                    <Div i="30" />
                  </div>
                </Col>
              </Row>
            </Col>
            <br />
          </Row>
        </Container>
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
                  Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                  enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                  tellus. Phasellus viverra nulla ut metus varius laoreet.
                </p>
                <p>
                  Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                  lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                  sapien ut libero venenatis faucibus.
                </p>
              </div>
            </Col>

            <Col lg={4} md={4} sm={12} xs={12} xxl={4} xl={4}>
              <div className="foot">
                <h3>Get Social</h3>
                <p>
                  Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                  enim. Aliquam lorem ante.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
