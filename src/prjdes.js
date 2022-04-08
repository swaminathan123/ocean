import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import React, { Component } from "react";
import "./prj.css";
import divimg from "./img/menu-1.jpg";
// import "./img/menu-1.jpg"
export class Div extends Component {
  render() {
    return (
      <div>
        <Row>
          {/* <Col lg={3} md={3} sm={3}> */}
          {/* <div> */}
          <img src={this.props.divimg} alt="" />
          {/* </div> */}
          {/* </Col> */}
          {/* <Col lg={6} md={6} sm={6}> */}
          <h4>{this.props.h}</h4>
          <p>{this.props.para}</p>
          {/* </Col> */}
          {/* <Col lg={3} md={3} sm={3}> */}
          {/* <div> */}
          <h1 className="text-center">{this.props.i}</h1>
          {/* </div> */}
          {/* </Col> */}
        </Row>
      </div>
    );
  }
}
