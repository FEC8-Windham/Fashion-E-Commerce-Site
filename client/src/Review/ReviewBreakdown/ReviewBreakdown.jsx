import React, { useState, useEffect } from 'react';
import StarRating from '../../Helper-Components/StarRating.jsx';
import { Container, BreakdownFlexContainer, BreakdownContainer } from '../Styles/ReviewStyles.js';
import { calculateAverageRating, calculateRecommendation } from '../../HelperFunctions.js';
import RatingBar from './RatingBar.jsx';


const ReviewBreakdown = (props) => {

  const avgRating = calculateAverageRating(props.reviewMeta.ratings).toFixed(1);
  const recommendationObj = calculateRecommendation(props.reviewMeta.recommended);
  const recommended = recommendationObj.recomended;
  const totalRecommended = recommendationObj.total;
  const ratings = props.reviewMeta.ratings;
  const ratingArr = [];
  const ratingBars = () => {
    for (var key in ratings) {
      ratingArr.unshift(<RatingBar rating={key} reviews={ratings[key]} percent={ratings[key] / totalRecommended} />);
    }
  };

  ratingBars();
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
        {ratingArr.map(rating => rating)}
      </BreakdownContainer>

    </BreakdownFlexContainer>

  );
};

export default ReviewBreakdown;