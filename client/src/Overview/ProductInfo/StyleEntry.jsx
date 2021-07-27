import React, {useState} from 'react';
import { ThumbImg, CheckMark, ThumbnailContainer} from '../Styled-Components/Styled-ProductInfo';
import Check from '../../../../Lib/Check.png';

var StyleEntry = ({style, setCurrStyleIndex, index, currStyleIndex}) => {

  var handleClick = () => {
    setCurrStyleIndex(index);
  };

  return (
    <ThumbnailContainer>
      {currStyleIndex === index ? <CheckMark src ={Check}></CheckMark> : null}
      <ThumbImg src={style.photos[0].thumbnail_url} onClick = {handleClick}>
      </ThumbImg>
    </ThumbnailContainer>
  );
};

export default StyleEntry;