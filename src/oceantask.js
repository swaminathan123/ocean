import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ocean.css";
import React, { Component } from "react";

class Oceantask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      click: true,
      name: "",
      cname: "",
      ctype: "",
      csdate: "",
      cedate: "",
      fileup: "",
    };
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="d-flex align-items-center justify-content-around">
                <h1>Education Details</h1>
                <span>
                  <input type="button" value="add" />
                </span>
                <input type="button" value="back" />
              </div>
            </Col>
            {/*  */}
            <Col lg={12}>
              <div>
                <Table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Course Name</th>
                      <th>Course Type</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>File</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            {/*  */}
            <Col lg={{ offset: 3, span: 6 }} className="mt-5">
              <div>
                <form className="">
                  <label>Name</label>
                  <input type="text" name="name" className="name" />
                  <br />
                  <label>Course Name</label>
                  <input type="text" name="cn" className="mt-4 cn" />
                  <br />
                  <label>Course Type</label>
                  <input type="text" name="ct" className="mt-4 ct" />
                  <br />
                  <label>Start Date</label>
                  <input type="date" name="sd" className="mt-4 sd" />
                  <br />
                  <label>End Date</label>
                  <input type="date" name="ed" className="mt-4 ed" />
                  <br />
                  <lable>File Upload</lable>
                  <input type="file" name="fu" className="mt-4 fu" />
                  <br />
                  <input type="submit" value="submit" className="mt-5 btnn" />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Oceantask;
