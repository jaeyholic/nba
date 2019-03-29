import React from "react";
import { Link } from "react-router-dom";
import { current_year } from "../../helpers";

//CSS Module
import style from "./footer.module.css";

const index = () => (
  <div className={style.footer}>
    <Link to="/" className={style.logo}>
      <img src="/images/nba_logo.png" alt="nba logo" />
    </Link>
    <div className={style.right}>NBA {current_year}. All rights reserved</div>
  </div>
);

export default index;
