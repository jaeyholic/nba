import React, { Component } from "react";
import axios from "axios";
import { URL } from "../../../../helpers";
import style from "../../Articles.module.css";
import Header from "./Header";

class Index extends Component {
  state = {
    team: [],
    article: []
  };

  componentWillMount() {
    axios
      .get(`${URL}/articles?id=${this.props.match.params.id}`)
      .then(response => {
        let article = response.data[0];
        axios.get(`${URL}/teams?id=${article.team}`).then(response => {
          this.setState({
            article,
            team: response.data
          });
        });
      });
  }

  render() {
    const article = this.state.article;
    const team = this.state.team;
    return (
      <div className={style.article}>
        <Header data={team[0]} date={article.date} author={article.author} />
        <div className={style.body}>
          <h1>{article.title}</h1>
          <div className={style.image} style={{
            background:`url(/images/articles/${article.image})`
          }} />
          <div className={style.text}>{article.body}</div>
        </div>
      </div>
    );
  }
}

export default Index;
