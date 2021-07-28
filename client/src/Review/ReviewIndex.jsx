import React, { useState } from 'react';
import ReviewTile from './ReviewTile/ReviewTile.jsx';
import { getReviews } from '../Controllers/reviewController.js';
import reviewData from '../../../APIExamples/reviews.js';
import TileContainer from './TileContainer/TileContainer.jsx';
import { ReviewModuleFlexContainer } from './Styles/ReviewStyles.js';
import ReviewBreakdown from './ReviewBreakdown/ReviewBreakdown.jsx';

const ReviewIndex = (props) => {
  const [filteredRatings, setFilteredRatings] = useState(props.reviews.results);

  const [oneStar, setOneStar] = useState(false);
  const [twoStar, setTwoStar] = useState(false);
  const [threeStar, setThreeStar] = useState(false);
  const [fourStar, setFourStar] = useState(false);
  const [fiveStar, setFiveStar] = useState(false);

  const filters = [oneStar, twoStar, threeStar, fourStar, fiveStar];

  const filterReviews = (reviewsToFilter) => {
    if (!filters.includes(true)) {
      console.log('if');
      return reviewsToFilter;
    } else {
      return reviewsToFilter.filter(review => filters[review.rating - 1]);

    }
  };

  const changeFilters = (rating) => {
    if (rating === 1) {
      setOneStar(!oneStar);
    } else if (rating === 2) {
      setTwoStar(!twoStar);
    } else if (rating === 3) {
      setThreeStar(!threeStar);
    } else if (rating === 4) {
      setFourStar(!fourStar);
    } else if (rating === 5) {
      setFiveStar(!fiveStar);
    }
  };


  return (
    <ReviewModuleFlexContainer>
      <ReviewBreakdown changeFilters={changeFilters} height={'300px'} reviewMeta={props.reviewMeta} >
      </ReviewBreakdown>
      <TileContainer reviewMeta={props.reviewMeta} filterReviews={filterReviews} reviews={filterReviews(props.reviews.results)} productId={props.reviews.product}/>
    </ReviewModuleFlexContainer>
  );
};

export default ReviewIndex;
