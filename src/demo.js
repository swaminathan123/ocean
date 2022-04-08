import React, { Component } from "react";
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: "swathi",
    };
    console.log("constructor");
  }
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + "rachel",
    }));
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render");
    const { count } = this.state;
    return (
      <>
        <button onClick={this.increment}>{count} </button>
      </>
    );
  }
}
export default Demo;
