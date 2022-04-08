import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import React, { Component } from "react";
import "./todo.css";
import reactDom from "react-dom";
var anas = [];
var hisham = [];
var names = [];
var palcechage = [];
var a;
var spl = [];
var place = [];
var box;
var index;

var z = 1;
var aaa;
var chage = [];
var n = [];
var b = [];
var arr = [];

class To extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  changeHandler = (event) => {
    this.setState(
      {
        username: event.target.value,
      },

      () => {
        console.log("username : " + event.target.value);
      }
    );
  };

  clickHandler = (event) => {
    // console.log(this.state.username);
    event.preventDefault();
    anas.push(this.state.username);

    // console.log(anas);
    hisham = anas;
    console.log(hisham);
    this.setState({
      username: "",
    });
    names = hisham;
    // a = React.createElement("button", "reactb", " Code");
    // b = a;
    a = "click";
    // b = a;
    // var a = React.createElement("h2", "send");
    // a.innerHTML = "send";
    // document.body.appendChild(a);
    // alert(hisham);

    // a1 = this.state.username;
  };
  click = (eve) => {
    eve.preventDefault();
    // palcechage = names;
    // console.log(eve.target.value);
    spl = names.splice(eve.target.value, 1);
    // chage = spl;
    // alert(spl);
    palcechage.push(spl);

    this.setState({
      username: "",
    });

    // console.log(event.target.aaa);
    // var aaa = document.getElementsByName("aaa");
    // aaa.parentNode.removeChild(aaa);
    // n = a;
    // console.log(b, n);

    // hisham.pop();
  };
  // tick = (event) => {
  //   event.preventDefault();
  //   <del>{event.target.value}</del>;
  //   alert(names);
  //   this.setState({
  //     username: "",
  //   });
  // };
  // remove(event) {
  //   event.preventDefault();

  //   z = this.state.names;
  //   x = z.x(event.target.value);
  //   delete z[x];
  // }

  handler = (ve) => {
    ve.preventDefault();
    // palcechage = names;
    place = palcechage;
    // console.log(eve.target.value);
    place.splice(ve.target.value, 1);
    this.setState({
      username: "",
    });
  };
  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <button onClick={this.clickHandler}>hj</button>

          {names.map((names, b) => (
            // <h1>{names}</h1>
            <span>
              {/* <div id="ar> */}
              <div key={b} className="">
                {names}
              </div>
              <div className="reactb">
                <button key={b} value={b} onClick={this.click}>
                  {b}
                  {a}
                </button>
              </div>

              <br />
              {/* </div> */}
            </span>
          ))}
          {/* <div className="reactb">{a}</div> */}
          {/* <h1>{this.state.username}</h1> */}
        </form>
        {/*  */}
        {/*  */}
        <div className="change">
          <form action="">
            <input type="text" onChange={this.changeHandler} />
            <button onClick={this.handler}>delete</button>
            {palcechage.map((palce, m) => (
              <span>
                <div key={m} className="">
                  {palce}
                </div>
                <div className="reactb">
                  <button key={m} value={m} onClick={this.handler}>
                    {m}
                    delete
                  </button>
                </div>

                <br />
              </span>
            ))}
          </form>
        </div>
      </div>
    );
  }
}

export default To;
