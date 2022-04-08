import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import React, { Component } from "react";
import "./todo.css";
// import React, { Component } from "react";
var a1;
var anas = [];
var b;
class Form extends Component {
  constructor(props) {
    super(props);
    // var a1;
    this.state = {
      name: "",
      kite: "",
      // list=[],
    };
  }

  changeHandler = (event) => {
    const { value } = event.target;
    this.setState(
      {
        name: value,

        // list.push(name);
        // console.log(name);
      }
      // () => console.log(a1)
    );
    // this.setState(
    //   {
    //     username: event.target.value,
    //   },
    //   () => {
    //     console.log("username : " + event.target.value);
    //   }
    // );
  };

  clickHandler = (event) => {
    // const { name } = this.state;
    event.preventDefault();
    // console.log(name);
    // var a1;
    a1 = this.state.name;
    alert(a1);
    this.setState({
      kite: a1,
    });
    b = "hisham";
    // anas.push(a1);
    // console.log(anas);

    // const { list } = { name };

    // name: "";
    // console.log(this.state.user);
    // event.preventDefault();
  };

  render() {
    const { name } = this.state;
    // var a1;

    // const { a1 } = this.state;
    return (
      <div>
        <form action="">
          <input type="text" value={name} onChange={this.changeHandler} />
          <button onClick={this.clickHandler}>hj</button>
          <h2>{this.state.kite}</h2>
          <h1>{b}</h1>
          {/* <h3>{list}</h3> */}
          {/* <h3>{name}</h3> */}
          {/* <h3>{a1}</h3> */}
        </form>
      </div>
    );
  }
}

export default Form;
