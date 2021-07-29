import React, {useState} from 'react';
import { MainImage, MainImageContainer, PrevArrow, NextArrow } from '../Styled-Components/Styled-ProductInfo';
import Thumbnail from './Thumbnail.jsx';

var DefaultView = ({currStyle}) => {
  var [photoIndex, setPhotoIndex] = useState(0);
  var [thumbIndex, setThumbIndex] = useState(0);

  var arrowHandler = (e) => {
    var value = e.target.dataset.value;
    if (value === 'prev') {
      setPhotoIndex(photoIndex - 1);
    } else {
      setPhotoIndex(photoIndex + 1);
    }
  };

  return (
    <MainImageContainer>
      <MainImage src = {currStyle.photos[photoIndex].url}></MainImage>

      {(photoIndex > 0) ? <PrevArrow data-value = 'prev' onClick = {arrowHandler}>&#10140;</PrevArrow> : null}
      {(photoIndex < currStyle.photos.length - 1) ? <NextArrow data-value = 'next' onClick = {arrowHandler}>&#10140;</NextArrow> : null}

      <Thumbnail currStyle = {currStyle} setPhotoIndex = {setPhotoIndex} photoIndex ={photoIndex}/>
    </MainImageContainer>
  );
};

export default DefaultView;
