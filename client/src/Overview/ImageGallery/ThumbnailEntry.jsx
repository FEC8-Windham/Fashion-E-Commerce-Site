import React from 'react';
import { MainThumbImgContainer, MainThumbImg } from '../Styled-Components/Styled-ProductInfo';

var ThumbnailEntry = ({photo, index, setPhotoIndex, setSelectedThumb, selectedThumb}) => {
  var thumbHandler = () => {
    setPhotoIndex(index);
    setSelectedThumb(index);
  };

  return (
    <MainThumbImgContainer>
      {selectedThumb === index ? <MainThumbImg src = {photo} onClick = {thumbHandler} selected>
      </MainThumbImg> : <MainThumbImg src = {photo} onClick = {thumbHandler}>
      </MainThumbImg>}
    </MainThumbImgContainer>
  );
};

export default ThumbnailEntry;