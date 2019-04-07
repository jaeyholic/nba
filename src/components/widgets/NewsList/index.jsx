import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../../../helpers";

//CSS Module
import style from "./NewsList.module.css";
import Button from "../Button";
import CardInfo from "../CardInfo";

class Index extends Component {
  state = {
    newsLists: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
    teams: []
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`).then(response => {
        this.setState({
          teams: response.data
        });
      });
    }
    axios.get(`${URL}/articles?_start=${start}&_end=${end}`).then(response => {
      this.setState({
        newsLists: [...this.state.newsLists, ...response.data],
        start,
        end
      });
    });
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  };

  renderNews = type => {
    let template = null;
    if (type === "card") {
      template = this.state.newsLists.map((item, i) => (
        <CSSTransition
          classNames={{
            enter: style.newsList_wrapper,
            enterActive: style.newsList_wrapper_enter
          }}
          timeout={500}
          key={i}
        >
          <div className={style.newsList_item}>
            <Link to={`/articles/${item.id}`}>
              <CardInfo
                teams={this.state.teams}
                team={item.team}
                date={item.date}
              />
              <h2>{item.title}</h2>
            </Link>
          </div>
        </CSSTransition>
      ));
    } else if (type === "CardMain") {
      template = this.state.newsLists.map((item, i) => (
        <CSSTransition
          classNames={{
            enter: style.newsList_wrapper,
            enterActive: style.newsList_wrapper_enter
          }}
          timeout={500}
          key={i}
        >
          <Link to={`/articles/${item.id}`}>
            <div className={style.flex_wrapper}>
              <div
                className={style.left}
                style={{ background: `url(/images/articles/${item.image})` }}
              >
                <div />
              </div>
              <div className={style.right}>
                <CardInfo
                  teams={this.state.teams}
                  team={item.team}
                  date={item.date}
                />
                <h2>{item.title}</h2>
              </div>
            </div>
          </Link>
        </CSSTransition>
      ));
    } else {
      template = null;
    }
    return template;
  };

  render() {
    return (
      <div>
        <TransitionGroup component="div" className="list">
          {this.renderNews(this.props.type)}
          <Button
            type="loadmore"
            loadMore={this.loadMore}
            cta="Load More News"
          />
        </TransitionGroup>
      </div>
    );
  }
}

export default Index;
