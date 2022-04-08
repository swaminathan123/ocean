import react from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./anasmark.css";

class Anasmark extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      mark1: false,
      mark2: false,
      mark5: false,
      mark10: false,
      nextPage: true,
    };
  }
  nextPage = () => {
    this.setState({
      nextPage: false,
    });
  };
  checkBox = (event) => {
    if (event.target.name === "mark1") {
      this.setState({
        mark1: !this.state.mark1,
      });
    } else if (event.target.name === "mark2") {
      this.setState({
        mark2: !this.state.mark2,
      });
    } else if (event.target.name === "mark5") {
      this.setState({
        mark5: !this.state.mark5,
      });
    } else if (event.target.name === "mark10") {
      this.setState({
        mark10: !this.state.mark10,
      });
    }
  };
  render() {
    if (this.state.nextPage) {
      return (
        <>
          <Container>
            <Row>
              <Col lg={7} md={6} sm={12}>
                <div className="bg-primary lay"></div>
              </Col>
              <Col lg={5} md={6} sm={12} className="check1">
                <div className="p-4">
                  <Table>
                    <thead>
                      <tr>
                        <th
                          className="text-capitalize text-secondary text-xxs font-weight-bolder opacity-7 text-edit"
                          colSpan={2}
                        >
                          TOTAL MARK
                        </th>
                        <th
                          className="text-capitalize text-secondary text-xxs font-weight-bolder opacity-7 text-edit"
                          colSpan={2}
                        >
                          <input
                            type="text"
                            className=""
                            minLength={1}
                            maxLength={3}
                          />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={2}>1 MARK</td>
                        <td colSpan={2}>
                          <input
                            class="form-check-input mt-2"
                            type="checkbox"
                            value=""
                            name="mark1"
                            id="flexCheckDefault"
                            onClick={this.checkBox}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>2 MARK</td>
                        <td colSpan={2}>
                          <input
                            class="form-check-input mt-2"
                            type="checkbox"
                            value=""
                            name="mark2"
                            id="flexCheckDefault"
                            onClick={this.checkBox}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>5 MARK</td>
                        <td colSpan={2}>
                          <input
                            class="form-check-input mt-2"
                            type="checkbox"
                            value=""
                            name="mark5"
                            id="flexCheckDefault"
                            onClick={this.checkBox}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>10 MARK</td>
                        <td colSpan={2}>
                          <input
                            class="form-check-input mt-2"
                            type="checkbox"
                            value=""
                            name="mark10"
                            id="flexCheckDefault"
                            onClick={this.checkBox}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Row>
                    <Col
                      lg={{ span: 2, offset: 6 }}
                      md={{ span: 2, offset: 5 }}
                      sm={{ span: 2, offset: 6 }}
                      xs={{ span: 2, offset: 6 }}
                    >
                      <div className="">
                        <input
                          type="submit"
                          className="check btn-sm"
                          value="SUBMIT"
                          onClick={this.nextPage}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      );
    } else {
      return (
        <>
          <Container>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div className="bg-primary lay"></div>
              </Col>
              <Col lg={6} md={6} sm={12} className="font1">
                <div className="p-4">
                  <Table>
                    <thead>
                      <tr>
                        <th
                          className="text-capitalize text-secondary text-xxs font-weight-bolder opacity-7 text-edit"
                          colSpan={2}
                        >
                          MARK
                        </th>
                        <th
                          className="text-capitalize text-secondary text-xxs font-weight-bolder opacity-7 text-edit"
                          colSpan={2}
                        >
                          NO OF QUESTIONS
                        </th>
                        <th
                          className="text-capitalize text-secondary text-xxs font-weight-bolder opacity-7 text-edit"
                          colSpan={2}
                        >
                          TOTAL MARK
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        className={this.state.mark1 ? "display" : "nodisplay"}
                      >
                        <td colSpan={2}>1 MARK</td>

                        <td
                          className="text-capitalize text-secondary text-xxs font-weight-bolder opacity-7 text-edit"
                          colSpan={2}
                        >
                          <input type="text" />
                        </td>
                        <td
                          className="text-capitalize text-secondary text-xxs font-weight-bolder opacity-7 text-edit"
                          colSpan={2}
                        >
                          22
                        </td>
                      </tr>

                      <tr
                        className={this.state.mark2 ? "display" : "nodisplay"}
                      >
                        <td colSpan={2}>2 MARK</td>

                        <td
                          className="text-capitalize text-secondary text-xxs font-weight-bolder opacity-7 text-edit"
                          colSpan={2}
                        >
                          <input type="text" />
                        </td>
                        <td
                          className="text-capitalize text-secondary text-xxs font-weight-bolder opacity-7 text-edit"
                          colSpan={2}
                        >
                          22
                        </td>
                      </tr>
                      <tr
                        className={this.state.mark5 ? "display" : "nodisplay"}
                      >
                        <td colSpan={2}>5 MARK</td>
                        <td
                          className="text-capitalize text-secondary text-xxs font-weight-bolder opacity-7 text-edit"
                          colSpan={2}
                        >
                          <input type="text" />
                        </td>
                        <td
                          className="text-capitalize text-secondary text-xxs font-weight-bolder opacity-7 text-edit"
                          colSpan={2}
                        >
                          11
                        </td>
                      </tr>
                      <tr
                        className={this.state.mark10 ? "display" : "nodisplay"}
                      >
                        <td colSpan={2}>10MARK</td>
                        <td
                          className="text-capitalize text-secondary text-xxs font-weight-bolder opacity-7 text-edit"
                          colSpan={2}
                        >
                          <input type="text" />
                        </td>
                        <td
                          className="text-capitalize text-secondary text-xxs font-weight-bolder opacity-7 text-edit"
                          colSpan={2}
                        >
                          77
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Row>
                    <Col
                      lg={{ span: 2, offset: 8 }}
                      md={{ span: 2, offset: 8 }}
                      sm={{ span: 2, offset: 8 }}
                      xs={{ span: 2, offset: 8 }}
                    >
                      <div className="">
                        <input
                          type="submit"
                          className="font btn-sm"
                          value="SUBMIT"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      );
    }
  }
}
export default Anasmark;
