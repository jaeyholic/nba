import React from "react";
import { Link } from "react-router-dom";

//CSS Module
import style from "./buttons.module.css";

const Index = props => {
  let template = null;
  if (props.type === "loadmore") {
    template = (
      <div className={style.blue_button} onClick={props.loadMore}>
        {props.cta}
      </div>
    );
  } else if (props.type === "linkTo") {
    template = (
      <Link to={props.linkTo} className={style.blue_button}>
        {props.cta}
      </Link>
    );
  } else {
    template = null;
  }

  return template;
};

export default Index;
