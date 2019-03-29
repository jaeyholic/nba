import React, { Component } from "react";
import "./layout.css";
import Header from "../../components/Header";

class index extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default index;
