import React, { useState } from 'react';

const SortSelect = (props) => {





  return (
    <select onChange={e=>props.refresh(e.target.value)}>
      <option value="relevant">Relevant</option>
      <option value="helpful">Helpful</option>
      <option value="newest">Newest</option>
    </select>
  );
};

export default SortSelect;

// import React, { useState } from 'react';
// import ReviewTile from '../ReviewTile/ReviewTile.jsx';
// import { getReviews } from '../../Controllers/reviewController.js';
// import reviewData from '../../../../APIExamples/reviews.js';
// import { Container, TileFlexContainer } from '../Styles/ReviewStyles.js';
// import SortSelect from './SortSelect.jsx';

// const TileContainer = (props) => {
//   const [reviews, setReviews] = useState(props.reviews.results);
//   // const [reviews, setReviews] = useState(reviewData.results);


//   const changeSort = (sortType) => {
//     console.log(sortType)
//     setSortBy(sortType)

//       .then(()=> refresh())
//       .then(()=>console.log(sortBy))
//     // refresh();
//   };



//   const refresh = () => {
//     console.log(refreshing)
//     // var params = {product_id: props.reviews.product, count: '10', sort: sortBy};
//     // getReviews(params)
//     //   .then(results => {
//     //     setReviews(results.data.results);
//     //   })
//     //   .catch(err => console.log(err));
//   };
//   const [sortBy, setSortBy] = useState(()=>'relevant');
//   return (
//     <TileFlexContainer>
//       <Container>248 Review, sorted by <SortSelect changeSort={changeSort}/></Container>
//       {reviews.map(review => <ReviewTile refresh ={refresh} key={review.review_id} review={review}/>)}
//     </TileFlexContainer>
//   );
// };

// export default TileContainer;
