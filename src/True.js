import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import "./firstcmp.css";
import { Container, Row, Col } from "react-bootstrap";
class True extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
    };
  }

  render() {
    if (this.state.condition) {
      return (
        <div className="value2">
          <h4>heading</h4>
          <h6>para</h6>
        </div>
      );
    } else
      return (
        <div className="value1">
          <h4>heading</h4>
          <h6>pa</h6>
        </div>
      );
  }
}
export default True;
