import React, { useState, useEffect } from 'react';
import ThumbnailEntry from './ThumbnailEntry.jsx';
import { MainThumbContainer, ThumbPrevArrow, ThumbNextArrow, InnerCarousel, CarouselContainer } from '../Styled-Components/Styled-ProductInfo';

var Thumbnail = ({ currStyle, setPhotoIndex, photoIndex }) => {
  var [sliderIndex, setSliderIndex] = useState(0);
  var [selectedThumb, setSelectedThumb] = useState(photoIndex);

  var clickHandler = (e) => {
    var value = e.target.dataset.value;
    if (value === 'prev') {
      setSliderIndex(sliderIndex - (100 / 7));
    } else {
      setSliderIndex(sliderIndex + (100 / 7));
    }
  };

  useEffect(() => {
    setSelectedThumb(photoIndex);
  }, [photoIndex]);

  return (
    <MainThumbContainer>
      {(sliderIndex < (100 / 7)) ? <ThumbPrevArrow></ThumbPrevArrow> : <ThumbPrevArrow data-value='prev' onClick={clickHandler} >&#10094;</ThumbPrevArrow>}

      <CarouselContainer>
        <InnerCarousel style={{ transform: `translateY(-${sliderIndex}%)` }}>
          {currStyle.photos.map((photo, i) => (
            <ThumbnailEntry key={i} photo={photo.thumbnail_url} index={i} setPhotoIndex={setPhotoIndex} setSelectedThumb={setSelectedThumb} selectedThumb={selectedThumb} />
          ))}
        </InnerCarousel>
      </CarouselContainer>

      {(currStyle.photos.length <= 7 || sliderIndex >= ((currStyle.photos.length - 7) * (100 / 7))) ? <ThumbNextArrow></ThumbNextArrow> : <ThumbNextArrow data-value='next' onClick={clickHandler}>&#10094;</ThumbNextArrow>}
    </MainThumbContainer>
  );
};

export default Thumbnail;