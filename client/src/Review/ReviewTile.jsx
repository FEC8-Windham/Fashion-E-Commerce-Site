import React , { useState } from 'react';
import moment from 'moment';
import StarRating from '../Helper-Components/StarRating.jsx';
import { Container, FlexContainer } from './Styles/ReviewStyles.js';


const ReviewTile = () => {

  const data = {
    "product": "19093",
    "page": 0,
    "count": 5,
    "results": [
        {
            "review_id": 348057,
            "rating": 5,
            "summary": "Great",
            "recommend": true,
            "response": null,
            "body": "This is a great review. Such a good review right here",
            "date": "2021-04-23T00:00:00.000Z",
            "reviewer_name": "theReviewer",
            "helpfulness": 1,
            "photos": [
                {
                    "id": 614239,
                    "url": "blob:http://localhost:3000/cf987bf4-97a3-487f-b285-99b557fb6b42"
                }
            ]
        },
        {
            "review_id": 348053,
            "rating": 4,
            "summary": "A good review",
            "recommend": false,
            "response": null,
            "body": "This is a good review written very well for a review",
            "date": "2021-04-23T00:00:00.000Z",
            "reviewer_name": "name",
            "helpfulness": 38,
            "photos": []
        },
        {
            "review_id": 348051,
            "rating": 1,
            "summary": "We need more reviews",
            "recommend": true,
            "response": null,
            "body": "We really need to fill up this review list for things",
            "date": "2021-04-22T00:00:00.000Z",
            "reviewer_name": "jackson",
            "helpfulness": 41,
            "photos": []
        },
        {
            "review_id": 348050,
            "rating": 5,
            "summary": "A crazy review",
            "recommend": true,
            "response": null,
            "body": "this review is so crazy that is a review thats crazy",
            "date": "2021-04-22T00:00:00.000Z",
            "reviewer_name": "Hello",
            "helpfulness": 4,
            "photos": []
        },
        {
            "review_id": 228401,
            "rating": 3,
            "summary": "They're heavy but great",
            "recommend": true,
            "response": "",
            "body": "I like them but they run wide.",
            "date": "2019-04-13T00:00:00.000Z",
            "reviewer_name": "thinfootjim",
            "helpfulness": 11,
            "photos": []
        }
    ]
  };

  const review = data.results[0];

  const recommendCheck = (bool) => {
    return bool ? <span>&#10003;I recommend this product</span> : null;
  };

  console.log(recommendCheck(review.recommend));


  const [summary, setSummary] = useState(()=> review.summary.slice(0, 60));
  const [recommendation, setRecommendation] = useState(() => {
    return review.recommend ? <span>&#10003;   I recommend this product</span> : null;
  });


  return (
    <FlexContainer>
      <Container >
        <Container float = 'left'>
          <StarRating rating={review.rating}/>
        </Container>
        <Container float = 'right'>
          {review.reviewer_name + ',    ' + moment(review.date).format('MMMM Do YYYY')}
        </Container>
      </Container>
      <Container >
        <b>{summary}</b>
      </Container>
      {recommendation}
      <Container >
        {review.body}
      </Container>
      <Container >
        Helpful? (add module)
      </Container>
    </FlexContainer>



  );

};

export default ReviewTile;
