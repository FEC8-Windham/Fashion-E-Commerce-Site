import React, { useState, useEffect } from 'react';
import StarRating from '../../Helper-Components/StarRating.jsx';
import { Container, BreakdownFlexContainer, BreakdownContainer, RatingSpan } from '../Styles/ReviewStyles.js';
import { calculateAverageRating, calculateRecommendation } from '../../HelperFunctions.js';
import RatingBar from './RatingBar.jsx';
import Characteristics from './Characteristics.jsx';


const ReviewBreakdown = (props) => {

  const avgRating = calculateAverageRating(props.reviewMeta.ratings).toFixed(1);
  const recommendationObj = calculateRecommendation(props.reviewMeta.recommended);
  const recommended = recommendationObj.recomended;
  const totalRecommended = recommendationObj.total;
  const ratings = props.reviewMeta.ratings;
  const characteristics = props.reviewMeta.characteristics;
  const ratingArr = [];
  const charArr = [];

  const charDivs = () => {
    for (var key in characteristics) {
      charArr.unshift(<Characteristics char={key} obj ={characteristics[key]} key={characteristics[key].id}/>);
    }
  };

  const ratingBars = () => {
    for (var key in ratings) {
      ratingArr.unshift(<RatingBar key={key} changeFilters={props.changeFilters} rating={key} reviews={ratings[key]} percent={ratings[key] / totalRecommended} />);
    }
  };
  charDivs();
  ratingBars();

  return (
    <BreakdownFlexContainer height={'500px'}>
      <BreakdownContainer weight={'bold'}>
        RATINGS & REVIEWS
      </BreakdownContainer>
      <BreakdownContainer>
        <RatingSpan>{avgRating.toString()}</RatingSpan>
        <StarRating rating={avgRating}/>
      </BreakdownContainer>
      <BreakdownContainer>
        <BreakdownContainer padding={true}>
          {recommended + '% of reviews recommend this product'}
        </BreakdownContainer>
        {ratingArr.map(rating => rating)}
      </BreakdownContainer>
      <BreakdownContainer>
        {charArr.map(char => char)}
      </BreakdownContainer>
    </BreakdownFlexContainer>

  );
};

export default ReviewBreakdown;