import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      err: "",
    };
  }
  user = (e) => {
    let a = e.target.name;
    let b = e.target.value;
    // let err = "";
    // if (a === "age") {
    //   if (b !== "" && Number(b)) {
    //     err = "errors";
    //   }
    // }
    this.setState({ err: "err" });
    this.setState({ [a]: b });

    // alert("gggg");
  };
  // formsubmit = (e) => {
  //   e.preventdefault();
  // alert("your name" + this.state.name);
  // };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={6}>
              <div>
                <form onSubmit={this.formsubmit}>
                  {/* <h1>age :{this.state.age}</h1> */}
                  name <input type="text" name="name" onChange={this.user} />
                  <br />
                  <br />
                  age <input type="text" name="age" onChange={this.user} />
                  <br />
                  <br />
                  {/* {this.state.err} */}
                  {/* {this.state.err} */}
                  <input type="submit" />
                </form>
              </div>
            </Col>
            {/* <Col lg={6}>
              <div>
                <h1>hello :{this.state.name}</h1>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Input;
