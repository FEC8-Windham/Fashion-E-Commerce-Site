import React from 'react';
import { RatingDiv, RatingDivCont, FullWidthDiv, RatingDivText, ZSpan } from '../Styles/ReviewStyles';

const RatingBar = (props) => {
  const rating = props.rating;
  const reviews = props.reviews;
  const percent = Number(props.percent) * 100;

  return (
    <RatingDivCont width={'100%'}>
      <RatingDivText height={'15px'} width={'20%'}>{rating > 1
        ? rating + ' Stars' : rating + ' Star'}</RatingDivText>
      <FullWidthDiv height={'15px'} width={'80%'}>
        <RatingDiv height={'15px'} width={`${percent}%`}>
          <ZSpan z-index = {1} >{reviews + ' Ratings'}</ZSpan>
        </RatingDiv>
      </FullWidthDiv>
    </RatingDivCont>
  );
};

export default RatingBar;