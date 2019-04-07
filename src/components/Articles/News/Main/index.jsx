import React from "react";

//components
import Slider from "../../../widgets/NewsSlider/";
import NewsList from '../../../widgets/NewsList'

const Index = () => {
  return (
    <div>
      <Slider type="featured" settings={{ dots: false }} start={0} amount={3} />
      <NewsList type="CardMain" loadMore={true} start={0} amount={5} />
    </div>
  );
};

export default Index;
