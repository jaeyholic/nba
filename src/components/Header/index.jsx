import React from "react";
import { Link } from "react-router-dom";
import style from "./header.module.css";

const logo = () => {
  return (
    <Link to={{ pathname: "/" }} className={style.logo}>
      <img src="/images/nba_logo.png" alt="nba logo" />
    </Link>
  );
};

const index = () => (
  <header className={style.header}>
    <div className={style.headerOpt}>{logo()}</div>
  </header>
);

export default index;
