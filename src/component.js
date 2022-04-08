import React, { Component } from "react";
class mount extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  click = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count);
      }
    );
  };
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    return (
      <>
        <h1>mounting</h1>
        <button onclick={this.click}>count</button>
      </>
    );
  }
}
export default mount;
