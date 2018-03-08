import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Datum extends Component {
  render() {
    let datum = new Date();
    return <div>Dnes je : {datum.toDateString()}</div>;
  }
}

export default Datum;
