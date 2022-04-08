// import React from "react";
import React, { Component } from "react";

import { Container, Row, Col, Button } from "reactstrap";

import "./web.css";

export class Webabout extends Component {
  render() {
    return (
      <div>
        <div className="">
          <h3 id="hn" className="color">
            {this.props.name}
          </h3>
          <h1>{this.props.who}</h1>
        </div>
      </div>
    );
  }
}

export class Webaboutone extends Component {
  render() {
    return (
      <div>
        <div className="">
          <p>{this.props.para}</p>
          <ul className="anas2">
            <li>{this.props.li1}</li>
            <li>{this.props.li2}</li>
            <li>{this.props.li3}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export class Webabouttwo extends Component {
  render() {
    return (
      <div>
        <div className="">
          <p>{this.props.para}</p>
          <div className="text-center">
            <p className="learnmore" id="" className="btn-buy">
              Learn More
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export class Webaboutbox extends Component {
  render() {
    return (
      <div className="ss">
        <Row className="">
          <Col lg={4} md={4} sm={4}>
            <div className=" mt-2 ">
              {/* <h4 class="d-none d-lg-block">Unde praesenti mara setra le</h4> */}
              <i className={this.props.i}></i>
              {/* <i class="fas fa-sun"></i> */}
              {/* <img src={this.props.img} alt="" /> */}
            </div>
          </Col>
          <Col lg={8} md={8} sm={8}>
            <div className=" mt-2 d-none d-lg-block ">
              <p>{this.props.para}</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export class Services extends Component {
  render() {
    return (
      <div className="dd services">
        <Row>
          <Col lg={4} md={4} sm={4}>
            <div className="mt-2 i">
              <i className={this.props.i}></i>
            </div>
          </Col>
          <Col lg={8} md={8} sm={8}>
            <div className="mt-2">
              <p>{this.props.para}</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export class Pricing extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <div className="text-center">
              <h5 className="m-4 ">{this.props.heading}</h5>
            </div>
            {/* </Col>
        </Row>
        <Row>
          <Col> */}
            <div>
              <h4>{this.props.one}</h4>
              <h6>{this.props.a}</h6>
              <h6>{this.props.s}</h6>
              <h6>{this.props.d}</h6>
              <h6 id="nna">{this.props.f}</h6>
              <h6 id="nna">{this.props.g}</h6>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export class Team extends Component {
  render() {
    return <div>{/* <img src={this.props.first} alt="anderson" /> */}</div>;
  }
}
