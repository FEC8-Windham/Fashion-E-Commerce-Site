import React, {useState} from 'react';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';
import { ImageGalleryContainer } from '../Styled-Components/Styled-ProductInfo.js';

var ImageGallery = ({currStyle}) => {

  var [photoIndex, setPhotoIndex] = useState(0);
  var [isExpanded, setIsExpanded] = useState(false);

  return (
    <ImageGalleryContainer>

      <DefaultView photoIndex = {photoIndex} setPhotoIndex = {setPhotoIndex} currStyle = {currStyle} setIsExpanded = {setIsExpanded}/>
      {isExpanded ? <ExpandedView photoIndex = {photoIndex} setPhotoIndex = {setPhotoIndex} currStyle = {currStyle} setIsExpanded ={setIsExpanded}/> : null}

    </ImageGalleryContainer>
  );
};

export default ImageGallery;

