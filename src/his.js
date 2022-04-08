import { Component } from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hisham.css";
import "./anas.css";
import "./subash.css";
import pop1 from "./img/popular-1.jpg";
import menu from "./img/menu.png";
import top_light from "./img/toplight.png";
import table from "./img/table-set.png";
import "./anas.css";
export class Cafe extends Component {
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
        <Container className="col-lg-10 tm-section-header-container ">
          <Row>
            <Col className="col-lg-4 ">
              <div className="mt-lg-5">
                <h2 className="tm-handwriting-font">Popular Items</h2>
                <hr />
              </div>
            </Col>
            <Col className="col-lg-6">{/* <h1>hhisah</h1> */}</Col>
          </Row>
        </Container>
        <Container className="jack " lg={5}>
          <Row>
            <Col lg={4} className="size">
              <div className=" ">
                <img className="ms-lg-5 ps-lg-3" src={pop1} alt="pop1" />
                <h2 className="text-center py-lg-3">asdsad</h2>
                <p className="  dice">
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque. sed ipsum.
                </p>
              </div>
            </Col>
            <Col lg={4} className="size">
              <div className=" ">
                <img className="ms-lg-5 ps-lg-3" src={pop1} alt="pop1" />
                <h2 className="text-center py-lg-3">asdsad</h2>
                <p className="  dice">
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque. sed ipsum.
                </p>
              </div>
            </Col>
            <Col lg={4} className="size">
              <div className=" ">
                <img className="ms-lg-5 ps-lg-3" src={pop1} alt="pop1" />
                <h2 className="text-center py-lg-3">asdsad</h2>
                <p className="  dice">
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque. sed ipsum.
                </p>
              </div>
            </Col>
            <Col lg={4} className="size">
              <div className=" ">
                <img className="ms-lg-5 ps-lg-3" src={pop1} alt="pop1" />
                <h2 className="text-center py-lg-3">asdsad</h2>
                <p className="  dice">
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque. sed ipsum.
                </p>
              </div>
            </Col>
            <Col lg={4} className="size">
              <div className=" ">
                <img className="ms-lg-5 ps-lg-3" src={pop1} alt="pop1" />
                <h2 className="text-center py-lg-3">asdsad</h2>
                <p className="  dice">
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque. sed ipsum.
                </p>
              </div>
            </Col>
            <Col lg={4} className="size">
              <div className=" ">
                <img className="ms-lg-5 ps-lg-3" src={pop1} alt="pop1" />
                <h2 className="text-center py-lg-3">asdsad</h2>
                <p className="  dice">
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque. sed ipsum.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="move ">
          <Row className="pb-lg-5">
            <Col lg={4}>
              <div>
                <img
                  className="ms-lg-5 ps-lg-5 ms-md-0 ps-md-0"
                  src={menu}
                  alt="asd"
                />
              </div>
            </Col>
            <Col lg={8}>
              <div className="">
                <p>
                  Phasellus viverra nulla ut metus varius laoreet. Quisque
                  rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                  Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                  rhoncus.
                </p>
                <ol>
                  <li>Tellus eget condimentum rhoncus.</li>
                  <li>Sem quam semper libero.</li>
                  <li>Sit amet adipiscing sem neque sed ipsum.</li>
                  <li>Nam quam nunc, blandit vel, luctus pulvinar.</li>
                  <li>Maecenas nec odio et ante tincidunt tempus.</li>
                  <li>Donec vitae sapien ut libero ventenatis faucibus.</li>
                </ol>

                <button className="round ms-lg-5 px-lg-2">read more</button>
              </div>
            </Col>
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
