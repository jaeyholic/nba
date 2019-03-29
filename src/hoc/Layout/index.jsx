import React, { Component } from "react";
import "./layout.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class index extends Component {
  state = {
    showNav: false
  };

  toggleSideNav = action => {
    this.setState({
      showNav: action
    });
  };

  render() {
    return (
      <div>
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSideNav(false)}
          onOpenNav={() => this.toggleSideNav(true)}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default index;
