import React from "react";
import NewsSlider from "../widgets/NewsSlider";
import NewsList from "../widgets/NewsList";

const index = () => (
  <div>
    <NewsSlider type="featured" start={0} amount={5} />
    <NewsList type='card' loadmore={true} start={3} amount={3} />
  </div>
);

export default index;
