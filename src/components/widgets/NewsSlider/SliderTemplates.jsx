import React from "react";
import Slick from "react-slick";
import { Link } from "react-router-dom";

//CSS Module
import style from "./slider.module.css";

const SliderTemplates = props => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true
  };

  let template = null;

  switch (props.type) {
    case "featured":
      template = props.data.map((item, i) => {
        return (
          <div key={i}>
            <div className={style.featured_item}>
              <div
                className={style.featured_image}
                style={{ background: `url(../images/articles/${item.image})` }}
              />
              <Link to={`/articles/${item.id}`}>
                <div className={style.featured_caption}>
                  {item.title}
                </div>
              </Link>
            </div>
          </div>
        );
      });
      break;
    default:
      template = null;
  }

  return <Slick {...settings}>{template}</Slick>;
};

export default SliderTemplates;
