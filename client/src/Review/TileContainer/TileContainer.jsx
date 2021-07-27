import React, { useState, useEffect } from 'react';
import ReviewTile from '../ReviewTile/ReviewTile.jsx';
import { getReviews } from '../../Controllers/reviewController.js';
import reviewData from '../../../../APIExamples/reviews.js';
import { Container, TileFlexContainer } from '../Styles/ReviewStyles.js';
import SortSelect from './SortSelect.jsx';

const TileContainer = (props) => {
  const [reviews, setReviews] = useState(props.reviews.results);
  // const [reviews, setReviews] = useState(reviewData.results);
  const [sortBy, setSortBy] = useState('relevant');

  const changeSort = (sortType) => {
    setSortBy(sortType);
    console.log(sortBy, 'setstate');
    refresh();

  };

  const refresh = (sortType = sortBy) => {
    console.log(sortBy,'in refresh')
    setSortBy(sortType);

    var params = {product_id: props.reviews.product, count: '10', sort: sortType};

    getReviews(params)
      .then(results => {
        setReviews(results.data.results);
      })
      .catch(err => console.log(err));
  };

  return (
    <TileFlexContainer>
      <Container>248 Review, sorted by <SortSelect refresh ={refresh} changeSort={changeSort}/></Container>
      {reviews.map(review => <ReviewTile refresh ={refresh} key={review.review_id} review={review}/>)}
    </TileFlexContainer>
  );
};

export default TileContainer;



// import React, { useState } from 'react';
// import ReviewTile from './ReviewTile/ReviewTile.jsx';
// import { getReviews } from '../Controllers/reviewController.js';
// import reviewData from '../../../APIExamples/reviews.js';




// const ReviewIndex = (props) => {
//   const [reviews, setReviews] = useState(props.reviews.results);
//   // const [reviews, setReviews] = useState(reviewData.results);



//   const refresh = () => {
//     getReviews(props.reviews.product)
//       .then(results => {
//         setReviews(results.data.results);
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div>
//       {reviews.map(review => <ReviewTile refresh ={refresh} key={review.review_id} review={review}/>)}
//     </div>
//   );
// };

// export default ReviewIndex;