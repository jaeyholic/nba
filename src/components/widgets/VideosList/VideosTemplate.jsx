import React from "react";
import { Link } from "react-router-dom";
import style from "./videosList.module.css";
import CardInfo from "../CardInfo";

const VideosTemplate = props => {
  return props.data.map((item, i) => (
    <Link to={`/videos/${item.id}`} key={i}>
      <div className={style.videoListItem}>
        <div
          className={style.left}
          style={{ background: `url(/images/videos/${item.image})` }}
        >
          <div></div>
        </div>
        <div className={style.right}>
          <CardInfo teams={props.teams} team={item.team} date={item.date}/>
          <h2>{item.title}</h2>
        </div>
      </div>
    </Link>
  ));
};

export default VideosTemplate;
