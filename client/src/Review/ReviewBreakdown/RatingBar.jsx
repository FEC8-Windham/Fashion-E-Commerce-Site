import React, { useState } from 'react';
import { RatingDiv, RatingDivCont, FullWidthDiv, RatingDivText, ZSpan } from '../Styles/ReviewStyles';

const RatingBar = (props) => {
  const rating = props.rating;
  const reviews = props.reviews;
  const percent = Number(props.percent) * 100;
  const [underline, setUnderline] = useState(false);
  const stars = rating > 1 ? rating + ' Stars' : rating + ' Star';

  console.log(underline)
  const toggle = () => {
    setUnderline(!underline)
  };

  return (
    <RatingDivCont onClick={()=>props.changeFilters(Number(rating))} width={'100%'}>
      <RatingDivText onClick={toggle} height={'15px'} width={'20%'}>{underline ? stars : <b>{stars}</b>}</RatingDivText>
      <FullWidthDiv height={'15px'} width={'80%'}>
        <RatingDiv height={'15px'} width={`${percent}%`}>
          <ZSpan z-index = {1} >{reviews + ' Ratings'}</ZSpan>
        </RatingDiv>
      </FullWidthDiv>
    </RatingDivCont>
  );
};

export default RatingBar;