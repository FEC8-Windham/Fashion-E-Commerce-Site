import React from 'react';
import { ThumbImg, CheckMark, ThumbnailContainer} from '../Styled-Components/Styled-ProductInfo';
import Check from '../../../../public/Lib/Check.png';


var StyleEntry = ({style, setCurrStyleIndex, index, currStyleIndex}) => {

  return (
    <ThumbnailContainer>
      {currStyleIndex === index ? <CheckMark src ={Check}></CheckMark> : null}
      <ThumbImg src={style.photos[0].thumbnail_url} onClick = {() => setCurrStyleIndex(index)}>
      </ThumbImg>
    </ThumbnailContainer>
  );
};

export default StyleEntry;