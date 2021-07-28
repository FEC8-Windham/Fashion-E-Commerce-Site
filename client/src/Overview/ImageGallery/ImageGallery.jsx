import React, {useState, useEffect} from 'react';
import { MainImage, MainImageContainer, PrevArrow, NextArrow } from '../Styled-Components/Styled-ProductInfo';
import { getMainPhotos, getThumbnails } from '../../HelperFunctions';

var ImageGallery = ({currStyle}) => {
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

export default ImageGallery;


{/* <div class="slideshow-container">

<!-- Full-width images with number and caption text -->
<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="img1.jpg" style="width:100%">
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="img2.jpg" style="width:100%">
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="img3.jpg" style="width:100%">
  <div class="text">Caption Three</div>
</div>

<!-- Next and previous buttons -->
<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br></br> */}