import React from 'react';
import { RatingDiv, RatingDivCont, FullWidthDiv, RatingDivText } from '../Styles/ReviewStyles';

const RatingBar = (props) => {

  return (
    <RatingDivCont width={'100%'}>
      <RatingDivText height={'15px'} width={'20%'}>1 Star</RatingDivText>
      <FullWidthDiv height={'15px'} width={'80%'}>
        <RatingDiv height={'15px'} width={'50%'}></RatingDiv>
      </FullWidthDiv>
    </RatingDivCont>


  );
};

export default RatingBar;