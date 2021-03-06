import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

//CSS Modules
import style from "./SideNavItems.module.css";

const SideNavItems = () => {
  const items = [
    {
      type: style.option,
      icon: "home",
      text: "Home",
      link: "/"
    },
    {
      type: style.option,
      icon: "file-text-o",
      text: "News",
      link: "/news"
    },
    {
      type: style.option,
      icon: "play",
      text: "Videos",
      link: "/videos"
    },
    {
      type: style.option,
      icon: "sign-in",
      text: "SignIn",
      link: "/signin"
    },
    {
      type: style.option,
      icon: "sign-out",
      text: "SignOut",
      link: "/signout"
    }
  ];

  const showItem = () => {
    return items.map((item, i) => {
      return (
        <div className={item.type} key={i}>
          <Link to={item.link}>
            <FontAwesome name={item.icon} />
            {item.text}
          </Link>
        </div>
      );
    });
  };

  return <div>{showItem()}</div>;
};

export default SideNavItems;
