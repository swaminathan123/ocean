import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ocean.css";
import React, { useState } from "react";

function Ocean() {
  const [state, setstate] = useState([
    {
      condition: true,
      button: true,
      name: "",
      cname: "",
      ctype: "",
      csdate: "",
      cedate: "",
      fileup: "",
    },
  ]);
  const [use, uses] = useState([]);

  const clickHandler = () => {
    use.push(state);

    setstate({
      name: "",
      cname: "",
      ctype: "",
      csdate: "",
      cedate: "",
      fileup: "",
    });

    console.log(use);
  };

  const changeHandler = () => {
    setstate({
      condition: !state.condition,
    });
    console.log(state.condition);
  };

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col lg={6}>
            <h3 className="edu"> Education Details</h3>
          </Col>
          <Col lg={2}>
            <input
              type="button"
              value="add"
              className="add"
              onClick={() => {
                setstate({ button: true }, console.log(state.button));
              }}
            />
          </Col>
          <Col lg={2}>
            <input
              type="button"
              value="view"
              onClick={() => {
                setstate({ button: false }, console.log(state.button));
              }}
              className="view"
            />
          </Col>
        </Row>

        {/*  */}
        {/*  */}
        {/*  */}
        <div className={state.button ? "nodisplay" : "display"}>
          <Row>
            <Col lg={12}>
              <Row>
                <Col lg={{ offset: 1, span: 10 }}>
                  <div className="tablebox">
                    <Table>
                      <thead className="text-center">
                        <tr>
                          <th>Name</th>
                          <th>Course Name</th>
                          <th>Course Type</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        {use.map((value, index) => {
                          return (
                            <React.Fragment key={index}>
                              <tr>
                                <td>{value.name}</td>
                                <td>{value.cname}</td>
                                <td>{value.ctype}</td>
                                <td>{value.csdate}</td>
                                <td>{value.cedate}</td>
                              </tr>
                            </React.Fragment>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        {/*  */}
        {/*  */}

        {/*  */}
        {/*  */}
        <div className={state.button ? "display" : "nodisplay"}>
          <Row className="mt-5 ">
            <Col lg={{ span: 8, offset: 2 }}>
              <Row className="wihe">
                <Col lg={{ span: 8, offset: 2 }}>
                  <Form className=" mt-5">
                    <h3 className="text-center mb-4">Education Details</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="font">Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        className="mb-2 font"
                        value={state.name}
                        onChange={(e) =>
                          setstate({ ...state, name: e.target.value })
                        }
                      />
                      <Form.Label className="font">Course Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Course Name"
                        className="mb-2"
                        value={state.cname}
                        onChange={(e) =>
                          setstate({ ...state, cname: e.target.value })
                        }
                      />
                      <Form.Label className="font">Course Type</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Course Type"
                        className="mb-2"
                        value={state.ctype}
                        onChange={(e) =>
                          setstate({ ...state, ctype: e.target.value })
                        }
                      />
                      <Form.Label className="font">
                        Course Start Date
                      </Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Course Start Date"
                        className="mb-2"
                        value={state.csdate}
                        onChange={(e) =>
                          setstate({ ...state, csdate: e.target.value })
                        }
                      />
                      <Form.Label className="font">Course End Date</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Course End Date"
                        className="mb-2"
                        value={state.cedate}
                        onChange={(e) =>
                          setstate({ ...state, cedate: e.target.value })
                        }
                      />
                      <Form.Label className="font">File Upload</Form.Label>
                      <Form.Control
                        type="file"
                        placeholder="File"
                        className="mb-4"
                        value={state.fileup}
                        onChange={(e) =>
                          setstate({ ...state, fileup: e.target.value })
                        }
                      />
                      <div className="text-center">
                        <Button
                          variant="primary"
                          className="cen mb-3"
                          value="clickHere"
                          onClick={clickHandler}
                        >
                          submit
                        </Button>
                      </div>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
}
export default Ocean;
