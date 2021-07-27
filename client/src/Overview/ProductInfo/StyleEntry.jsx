import React, {useState} from 'react';
import { ThumbImg, CheckMark, ThumbnailContainer} from '../Styled-Components/Styled-ProductInfo';
import Check from '../../../../Lib/Check.png';



var StyleEntry = ({style, setCurrStyle}) => {
  var handleClick = (e) => {
    e.preventDefault();
    setCurrStyle(style);
  };
  return (
    <ThumbnailContainer>
      <CheckMark src ={Check}></CheckMark>
      <ThumbImg src={style.photos[0].thumbnail_url} onClick = {handleClick}>
      </ThumbImg>
    </ThumbnailContainer>
  );
};

export default StyleEntry;