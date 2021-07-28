import React, {useState, useEffect} from 'react';
import { MainImage, MainImageContainer, PrevArrow, NextArrow } from '../Styled-Components/Styled-ProductInfo';
import { getMainPhotos, getThumbnails } from '../../HelperFunctions';

var DefaultView = ({currStyle}) => {
  var [photoIndex, setPhotoIndex] = useState(0);

  var clickHandler = (e) => {
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
      {(photoIndex > 0) ? <PrevArrow data-value = 'prev' onClick = {clickHandler}>&#10094;</PrevArrow> : null}
      {(photoIndex < currStyle.photos.length - 1) ? <NextArrow data-value = 'next' onClick = {clickHandler}>&#10095;</NextArrow> : null}
    </MainImageContainer>

  );
};

export default DefaultView;
