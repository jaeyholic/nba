import React from 'react';
import style from '../videosList.module.css'
import VideosTemplate from "../VideosTemplate";

const Index = (props) => {
  return (
    <div className={style.related}>
      <VideosTemplate data={props.data} teams={props.teams}/>
    </div>
  );
};

export default Index;