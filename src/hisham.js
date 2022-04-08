import react from "react";
import { Component } from "react/cjs/react.production.min";
import { Button } from "reactstrap";

class Cname extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      name: Props.a,
      store: Props.b,
      age: "20",
    };
  }

  anas() {
    alert("welcome to react");
    this.setState({ name: this.state.store });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.store}</h3>
        <Button onClick={() => this.anas()}></Button>
      </div>
    );
  }
}

export default Cname;
