import React, { useState, useRef, useEffect } from 'react';
import ReviewTile from './ReviewTile/ReviewTile.jsx';
import { getReviews, postReview } from '../Controllers/reviewController.js';
import reviewData from '../../../APIExamples/reviews.js';
import TileContainer from './TileContainer/TileContainer.jsx';
import { ReviewModuleFlexContainer } from './Styles/ReviewStyles.js';
import ReviewBreakdown from './ReviewBreakdown/ReviewBreakdown.jsx';
import NewReview from './NewReview.jsx/NewReview.jsx';

const ReviewIndex = (props) => {
  const [oneStar, setOneStar] = useState(false);
  const [twoStar, setTwoStar] = useState(false);
  const [threeStar, setThreeStar] = useState(false);
  const [fourStar, setFourStar] = useState(false);
  const [fiveStar, setFiveStar] = useState(false);
  const [sortBy, setSortBy] = useState('relevant');
  // const [reviews, setReviews] = useState(reviewData.results);
  const [reviews, setReviews] = useState(props.reviews.results);
  const reviewRef = useRef();
  const filters = [oneStar, twoStar, threeStar, fourStar, fiveStar];
  const [showNewReview, setNew] = useState(false);

  const filterReviews = (reviewsToFilter) => {
    if (!filters.includes(true)) {
      return reviewsToFilter;
    } else {
      return reviewsToFilter.filter(review => filters[review.rating - 1]);

    }
  };

  const openNew = () => {
    setNew(!showNewReview);
  };

  const closeAndSubmit = (body) => {
    postReview(body)
      .then(res => {
        console.log(res);
        refresh();
        openNew();
        alert('Post successful');
      })
      .catch(err => alert(err));
  };

  const refresh = (sortType = sortBy) => {
    // if (sortType !== sortBy) {
    setSortBy(sortType);
    // }

    var params = {product_id: props.reviews.product, count: '10', sort: sortType};
    getReviews(params)
      .then(results => {
        setReviews(results.data.results);
      })
      .catch(err => console.log(err));
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

  useEffect(() => {
    props.getReviewDiv(reviewRef);
  }, [reviewRef]);

  return (
    <ReviewModuleFlexContainer>
      <ReviewModuleFlexContainer width ={'1200px'}ref = {reviewRef}>
        <ReviewBreakdown changeFilters={changeFilters} height={'300px'} reviewMeta={props.reviewMeta} >
        </ReviewBreakdown>
        <TileContainer open={openNew} reviewMeta={props.reviewMeta} filterReviews={filterReviews} reviews={filterReviews(reviews)} productId={props.reviews.product} refresh ={refresh}/>
        {showNewReview ? <NewReview closeAndSubmit ={closeAndSubmit} close={openNew} reviewMeta={props.reviewMeta} productName={props.productInfo.name}/> : null}
      </ReviewModuleFlexContainer>
    </ReviewModuleFlexContainer>
  );
};


export default ReviewIndex;
