import React from 'react';
import style from '../Articles.module.css'

const PostData = (props) => {
  return (
    <div className={style.postData}>
      <div>Date: <span>{props.data.date}</span></div>
      <div>Author: <span>{props.data.author}</span></div>
    </div>
  );
};

export default PostData;