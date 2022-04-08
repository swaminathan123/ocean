import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

class Classcmp extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      // name: "swami",
      //   age: "21",
      count: 0,
    };
  }
  fname() {
    this.setState(
      {
        // name: "swaminathan",

        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count);
      }
    );
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={() => this.fname()}>submit</button>
      </div>
    );
  }
}
export default Classcmp;
