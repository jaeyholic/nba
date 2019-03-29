import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import style from "./header.module.css";
import SideNav from "./SideNav/SideNav";

const index = props => {
  const logo = () => {
    return (
      <Link to="/" className={style.logo}>
        <img src="/images/nba_logo.png" alt="nba logo" />
      </Link>
    );
  };

  const navBars = () => (
    <div className={style.bars}>
      <FontAwesome
        onClick={props.onOpenNav}
        name="bars"
        style={{ color: "#dfdfdf", padding: "10px", cursor: "pointer" }}
      />
    </div>
  );

  return (
    <header className={style.header}>
      <SideNav {...props} />
      <div className={style.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default index;
