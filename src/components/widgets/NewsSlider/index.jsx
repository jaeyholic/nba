import React, { Component } from "react";
import axios from "axios";

//components
import SliderTemplates from "./SliderTemplates";

class Index extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:3004/articles?_start=${this.props.start}&_end=${
          this.props.amount
        }`
      )
      .then(response => {
        this.setState({
          news: response.data
        });
      });
  }

  render() {
    return (
      <div>
        <SliderTemplates data={this.state.news} type={this.props.type} />
      </div>
    );
  }
}

export default Index;
