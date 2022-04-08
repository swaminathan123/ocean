import React, { Component } from "react";
// import Mouse from "./mouse";
class click extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  click = () => {
    this.setState(
      {
        count: this.state.count + 1,
      }
      // () => {
      //   console.log(this.state.count);
      // }
    );
  };
  // click = () => {
  //   this.setState((prevState) => ({
  //     count: prevState.count + 1,
  //   }));
  // };

  render() {
    return (
      <>
        <h1>count : {this.state.count}</h1>
        <button onClick={this.click}>click</button>
      </>
    );
  }
}
export default click;
