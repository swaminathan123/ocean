import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import "./school.css";
class Drop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: true,
    };
  }

  changeHandler = (event) => {
    if (event.target.id === "form1") {
      this.setState({
        subject: false,
      });
      alert("ek");
    }
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={6}>
              <div>
                <select
                  class="form-select"
                  id="form1"
                  aria-label="Default select example"
                  onChange={this.changeHandler}
                >
                  <option selected>Choose Your Standard</option>
                  <option value="1">I STD</option>
                  <option value="2">II STD</option>
                  <option value="3">III STD</option>
                  <option value="4">IV STD</option>
                  <option value="5">V STD</option>
                  <option value="6">VI STD</option>
                  <option value="7">VII STD</option>
                  <option value="8">VIII STD</option>
                  <option value="9">IX STD</option>
                  <option value="10">X STD</option>
                  <option value="11">XI STD</option>
                  <option value="12">XII STD</option>
                </select>
              </div>
            </Col>

            <Col lg={6}>
              <div>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Subject Name
                  </InputGroup.Text>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
              </div>
            </Col>
          </Row>
          <br />
          <br />
        </Container>
      </div>
    );
  }
}
export default Drop;
