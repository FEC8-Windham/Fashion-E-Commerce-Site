import React, { useEffect, useState } from 'react';
import { ExpandModalContainer, ExpandedImg, ExpandImgContainer, ExpandNextArrow, ExpandPrevArrow, IconsContainer, Icons, ZoomedContainer, ExitButton } from '../Styled-Components/Styled-ProductInfo';

var ExpandedView = ({ photoIndex, setPhotoIndex, currStyle, setIsExpanded }) => {

  var [selectedDot, setSelectedDot] = useState(null);
  var [isZoomed, setIsZoomed] = useState(false);
  var [xPosition, setXPosition] = useState(null);
  var [yPosition, setYPosition] = useState(null);

  var arrowHandler = (e) => {
    var value = e.target.dataset.value;
    if (value === 'prev') {
      setPhotoIndex(photoIndex - 1);
    } else {
      setPhotoIndex(photoIndex + 1);
    }
  };

  var dotHandler = (i) => (e) => {
    setSelectedDot(i);
    setPhotoIndex(i);
  };

  var zoomIn = (e) => {
    var x = e.clientX - e.target.offsetLeft;
    var y = e.clientY - e.target.offsetTop;
    setXPosition(x);
    setYPosition(y);
    setIsZoomed(!isZoomed);
  };

  var zoomMouseMove = (e) => {
    var x = e.clientX - e.target.offsetLeft;
    var y = e.clientY - e.target.offsetTop;
    setYPosition(y);
    setXPosition(x);
  };

  useEffect(() => {
    setSelectedDot(photoIndex);
  }, [photoIndex]);

  return (
    <ExpandModalContainer>

      <ExpandImgContainer >
        {(photoIndex > 0) ? <ExpandPrevArrow data-value='prev' onClick={arrowHandler}>&#10140;</ExpandPrevArrow> : null}
        {(photoIndex < currStyle.photos.length - 1) ? <ExpandNextArrow data-value='next' onClick={arrowHandler}>&#10140;</ExpandNextArrow> : null}

        <ZoomedContainer>
          {isZoomed ? <ExpandedImg src={currStyle.photos[photoIndex].url} onClick={zoomIn} zoom xPos={xPosition} yPos={yPosition} onMouseMove={zoomMouseMove}></ExpandedImg> : <ExpandedImg src={currStyle.photos[photoIndex].url} onClick={zoomIn} xPos={xPosition} yPos={yPosition}>
          </ExpandedImg>}
          <ExitButton onClick={() => setIsExpanded(false)}>&#x2715;</ExitButton>

        </ZoomedContainer>

      </ExpandImgContainer>
      <br></br>

      <IconsContainer>
        {currStyle.photos.map((photo, i) => (
          i === selectedDot ?
            <Icons selected key={i} onClick={() => (dotHandler(i))}></Icons> : <Icons key={i} value={i} onClick={dotHandler(i)}></Icons>
        ))}

      </IconsContainer>


    </ExpandModalContainer>

  );
};

export default ExpandedView;