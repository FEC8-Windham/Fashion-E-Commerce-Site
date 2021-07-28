import React, { useState, useEffect } from 'react';
import StarRating from '../../Helper-Components/StarRating.jsx';
import { Container, BreakdownFlexContainer, BreakdownContainer } from '../Styles/ReviewStyles.js';
import { calculateAverageRating, calculateRecommendation } from '../../HelperFunctions.js';
import RatingBar from './RatingBar.jsx';


const ReviewBreakdown = (props) => {

  const avgRating = calculateAverageRating(props.reviewMeta.ratings).toFixed(1);
  const recommended = calculateRecommendation(props.reviewMeta.recommended);
  return (
    <BreakdownFlexContainer height={'200px'}>
      <BreakdownContainer>
        RATINGS & REVIEWS
      </BreakdownContainer>
      <BreakdownContainer>
        {avgRating.toString()}
        <StarRating rating={avgRating}/>
      </BreakdownContainer>
      <BreakdownContainer>
        {recommended + '% of reviews recommend this product'}
        <RatingBar/>
      </BreakdownContainer>
    </BreakdownFlexContainer>

  );
};

export default ReviewBreakdown;