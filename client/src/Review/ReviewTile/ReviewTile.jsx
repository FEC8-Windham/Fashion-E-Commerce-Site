import React, { useState } from 'react';
import moment from 'moment';
import ReviewTileBody from './ReviewTileBody.jsx';
import StarRating from '../../Helper-Components/StarRating.jsx';
import { Container, FlexContainer } from '../Styles/ReviewStyles.js';
import reviewData from '../../../../APIExamples/reviews.js';
import HelpfulWidget from './HelpfulWidget.jsx';

const ReviewTile = (props) => {
  const review = props.review;

  //checks for response, returns a div if there is one
  const responseCheck = () => {
    return review.response ? <Container><div><b>Response:<br></br></b>{review.response}</div></Container> : null;
  };

  //first 60 chars of the review summary
  const [summary, setSummary] = useState(()=> review.summary.slice(0, 60));

  //only returns div if the product was recommended by reviewer
  const [recommendation, setRecommendation] = useState(() => {
    return review.recommend ? <Container><span>&#10003;   I recommend this product</span></Container> : null;
  });

  //renders a employee response if there was one.
  const [response, setResponse] = useState(()=>responseCheck(review.response));


  return (
    <FlexContainer>
      <Container >
        <Container float = 'left'>
          <StarRating rating={review.rating}/>
        </Container>
        <Container float = 'right'>
          {review.reviewer_name + ',      ' + moment(review.date).format('MMMM Do YYYY')}
        </Container>
      </Container>
      <Container >
        <b>{summary}</b>
      </Container>
      <ReviewTileBody review={review}/>
      {recommendation}
      {response}
      <Container>
        <HelpfulWidget review={review}/>
      </Container>
    </FlexContainer>



  );

};

export default ReviewTile;
