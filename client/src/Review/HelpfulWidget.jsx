import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import StarRating from '../Helper-Components/StarRating.jsx';
import { Container, FlexContainer } from './Styles/ReviewStyles.js';
import reviewData from '../../../APIExamples/reviews.js';
import API_KEY from '../config/config.js';



const HelpfulWidget = (props) => {

  const review = reviewData.results[0];

  const yes = review.helpfulness;

  //update the helpfulness rating with a put request to the reviewID
  const handleClick = (string) => {
    let config = {
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${review.review_id}/${string}`,
      headers: {
        'Authorization': API_KEY
      }
    };

    axios(config)
      .then((response) => {
        console.log(`Successfly reported as ${string}, Status Code ${response.status}`);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return <span>Helpful?{'              '}
    <span onClick={()=>handleClick('helpful')} >
      <u>Yes</u>  ({yes})</span >
    <span onClick={()=>handleClick('report')}>     |   <u>No</u> </span>
  </span>;
};

export default HelpfulWidget;