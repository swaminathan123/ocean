import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import React, { Component } from "react";
import "./todo.css";
//
var anas = [];
var hisham = [];
var names = [];
var palcechage = [];
var a;
var spl = [];
var place = [];
//
class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }
  //
  changeHandler = (event) => {
    this.setState(
      {
        username: event.target.value,
      },

      () => {
        console.log("username : " + event.target.value);
      }
    );
  };
  //
  clickHandler = (event) => {
    event.preventDefault();
    anas.push(this.state.username);

    hisham = anas;
    // console.log(hisham);

    this.setState({
      username: "",
    });
    names = hisham;
    // a = "click";
  };
  //
  click = (eve) => {
    eve.preventDefault();
    spl = names.splice(eve.target.value, 1);
    // alert(spl);
    palcechage.push(spl);

    this.setState({
      username: "",
    });
  };
  //
  handler = (ve) => {
    ve.preventDefault();
    place = palcechage;
    // console.log(eve.target.value);
    place.splice(ve.target.value, 1);
    this.setState({
      username: "",
    });
  };
  //
  //
  //
  render() {
    return (
      <div>
        <Container className="mt-5">
          <Row>
            <Col
              lg={{ offset: 3, span: 6 }}
              md={{ offset: 3, span: 6 }}
              sm={{ offset: 2, span: 8 }}
            >
              <div className="one">
                <h3> TO-DO LIST</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="">
              <div className="hw">
                <div className="two">
                  <h6>Enter your Task in Below Text Box</h6>
                </div>
                <span className="jj">
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.changeHandler}
                    className="firstbox"
                    // placeholder="Recipient's username"
                    // aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={this.clickHandler}
                    className="firstbtn"
                  >
                    Add
                  </Button>
                </span>

                <div>
                  {names.map((names, b) => (
                    <div key={b}>
                      <span>
                        <input type="text" className="boxx" value={names} />
                        <button
                          key={b}
                          value={b}
                          className="secbtn"
                          onClick={this.click}
                        >
                          {/* {b} */}
                          done
                        </button>
                        <p className="pp">
                          if you complete the task then click the done button{" "}
                        </p>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/*  */}
            </Col>
            {/*  */}
            {/* 2box */}
            <Col lg={6} className="">
              <div className="hw">
                <h3 className="text-center">delete side</h3>
                {palcechage.map((place, m) => (
                  <div key={m}>
                    <span>
                      <input type="text" value={place} className="boxx" />
                      <button
                        key={m}
                        value={m}
                        className="secbtn"
                        onClick={this.handler}
                      >
                        delete
                      </button>
                      <p className="pp">click the Delete button</p>
                    </span>
                  </div>
                ))}
              </div>
            </Col>
            {/* end */}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Todo;
