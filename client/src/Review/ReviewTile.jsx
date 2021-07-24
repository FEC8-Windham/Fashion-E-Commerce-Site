import React, { useState } from 'react';
import moment from 'moment';
import StarRating from '../Helper-Components/StarRating.jsx';
import { Container, FlexContainer } from './Styles/ReviewStyles.js';
import reviewData from '../../../APIExamples/reviews.js';
import HelpfulWidget from './HelpfulWidget.jsx';


const ReviewTile = () => {

  const data = reviewData;
  console.log(data);
  const review = data.results[0];

  const recommendCheck = (bool) => {
    return bool ? <span>&#10003;I recommend this product</span> : null;
  };

  const responseCheck = () => {
    return review.response ? <Container><div><b>Response:<br></br></b>{review.response}</div></Container> : null;
  };

  const responseDiv = () => {

  };

  console.log(recommendCheck(review.recommend));


  const [summary, setSummary] = useState(()=> review.summary.slice(0, 60));
  const [recommendation, setRecommendation] = useState(() => {
    return review.recommend ? <Container><span>&#10003;   I recommend this product</span></Container> : null;
  });
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
      {recommendation}
      {response}
      <Container >
        {review.body}
      </Container>
      <Container >
        <HelpfulWidget/>
      </Container>
    </FlexContainer>



  );

};

export default ReviewTile;
