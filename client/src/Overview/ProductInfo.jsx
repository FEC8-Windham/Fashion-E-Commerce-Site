import React, {useState} from 'react';
import { render } from 'react-dom';
import StarRating from '../Helper-Components/StarRating.jsx';
import { Category, Name, Price, Style, Size, Description } from './Styled-Components/Styled-ProductInfo.js';

var ProductInfo = ({rating, category, name, price, style, size, description}) => {
// console.log(props);
  return (
    <div>
      <StarRating rating={rating}/>
      <Category>{category}</Category>
      <Name>{name}</Name>
      <Price>{price}</Price>
      <Style>{style}</Style>
      <Size>{size}</Size>
      <Description>{description}</Description>
    </div>
  );
};

export default ProductInfo;
