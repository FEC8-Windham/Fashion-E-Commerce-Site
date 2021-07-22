import React, { useState } from 'react';
import styled from 'styled-components';

var StarRating = (props) => {

  var Star = styled.span`
  background: linear-gradient(90deg, gold ${(props) => props.yellowPercentage}%, darkgray ${(props) => props.yellowPercentage}% ${props => 100 - props.yellowPercentage}%);
  color:black;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

  var roundedStar = (Math.round(props.rating * 2) / 2).toFixed(1);
  var fullStars = Math.floor(roundedStar);
  var remainder = roundedStar - fullStars;
  var stars = [];

  for (var i = 0; i < fullStars; i++) {
    stars.push(100);
  }
  stars.push(remainder * 100);
  for (var i =0; i < 5 - fullStars - 1; i++) {
    stars.push(0);
  }

  return (
    <div>
    {
      stars.map((percentage) =>
        (<Star yellowPercentage= {percentage}>&#9733;</Star>)
      )
    }
    </div>
  );

}

export default StarRating;
