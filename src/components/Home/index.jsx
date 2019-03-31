import React from "react";

//components
import NewsSlider from "../widgets/NewsSlider";
import NewsList from "../widgets/NewsList";
import VideosList from '../widgets/VideosList'

const index = () => (
  <div>
    <NewsSlider type="featured" start={0} amount={5} />
    <NewsList type="card" loadmore={true} start={3} amount={3} />
    <VideosList
      type="card"
      title={true}
      loadmore={true}
      start={0}
      amount={3}
    />
  </div>
);

export default index;
