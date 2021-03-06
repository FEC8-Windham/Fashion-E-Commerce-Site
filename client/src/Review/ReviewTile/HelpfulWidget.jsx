import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import StarRating from '../../Helper-Components/StarRating.jsx';
import { Container, FlexContainer, HelpfulSpan } from '../Styles/ReviewStyles.js';
import reviewData from '../../../../APIExamples/reviews.js';
import {helpfulClick} from '../../Controllers/reviewController.js';
import API_KEY from '../../config/config.js';

const HelpfulWidget = (props) => {
  const review = props.review;
  const yes = review.helpfulness;

  //update the helpfulness rating with a put request to the reviewID, only allows one submission
  const handleClick = (string) => {
    if (voteMade) {
      console.log('Vote already cast');
      return;
    }
    setVoteMade(true);
    helpfulClick(review.review_id, string)
      .then(()=> props.refresh());
  };

  const [voteMade, setVoteMade] = useState(false);

  return <HelpfulSpan>Helpful?{'              '}
    <span onClick={()=>handleClick('helpful')} >
      <u>Yes</u>  ({yes})</span >
    <span onClick={()=>handleClick('report')}>     |   <u>Report</u> </span>
  </HelpfulSpan>;
};

export default HelpfulWidget;