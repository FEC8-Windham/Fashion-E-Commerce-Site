import React from 'react';
import styled from 'styled-components';

var StarRating = (props) => {
  var Star = styled.span`
  background: linear-gradient(90deg, gold ${(props) => props.yellowPercentage}%, darkgray ${(props) => props.yellowPercentage}% ${props => 100 - props.yellowPercentage}%);
  color:black;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

  var roundedRating = Math.ceil(4 * props.rating) / 4;
  var fullStars = Math.floor(roundedRating);
  var remainder = roundedRating - fullStars;
  var stars = [];

  if (remainder === 0.25) {
    remainder += 0.15;
  } else if (remainder === 0.75) {
    remainder -= 0.15;
  }

  for (var i = 0; i < fullStars; i++) {
    stars.push(100);
  }
  if (fullStars <= 4) {
    stars.push(remainder * 100);
    for (var i = 0; i < 5 - fullStars - 1; i++) {
      stars.push(0);
    }
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

};

export default StarRating;
