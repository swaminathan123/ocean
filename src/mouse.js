// import React { Component } from "react";
import React, { Component } from "react";

class mouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  mouse = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <h1 onMouseOver={this.mouse}>mouseover : {this.state.count}</h1>
        <button onClick={this.mouse}>mouseover{this.state.count}</button>
      </>
    );
  }
}
export default mouse;
