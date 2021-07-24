import React, {useState} from 'react';
import { StyleThumbnail } from '../Styled-Components/Styled-ProductInfo';


var StyleEntry = ({style, setCurrStyle}) => {
  var handleClick = (e) => {
    e.preventDefault();
    setCurrStyle(style);
  };
  return (
    <StyleThumbnail src={style.photos[0].thumbnail_url} onClick = {handleClick}></StyleThumbnail>
  );
};

export default StyleEntry;