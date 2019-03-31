import React, { Component } from "react";
import axios from "axios";
import style from "./videosList.module.css";
import { URL } from "../../../helpers";
import Button from "../Button";
import VideosTemplate from './VideosTemplate'

class Index extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    amount: this.props.amount,
    end: this.props.start + this.props.amount
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  renderTitle = () => {
    return this.props.title ? (
      <h3>
        <strong>NBA</strong> Videos
      </h3>
    ) : null;
  };

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`).then(response => {
        this.setState({
          teams: response.data
        });
      });
    }

    axios.get(`${URL}/videos?_start=${start}&_end=${end}`).then(response => {
      this.setState({
        videos: [...this.state.videos, ...response.data],
        start,
        end
      });
    });
  };

  renderVideos = () => {
    let template = null;
    if (this.props.type === "card") {
      template = (
        <VideosTemplate data={this.state.videos} teams={this.state.teams} />
      );
    } else {
      template = null;
    }
    return template;
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount
    this.request(this.state.end, end)
  };

  renderButton = () => {
    return this.props.loadmore ? (
      <Button
        type="loadmore"
        loadMore={() => this.loadMore()}
        cta="Load More Videos"
      />
    ) :
      <Button type="linkTo" cta="More Videos" linkTo="/videos" />
  };

  render() {
    return (
      <div className={style.videosList_wrapper}>
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    );
  }
}

export default Index;
