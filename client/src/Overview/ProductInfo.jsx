import React, {useState} from 'react';
import { render } from 'react-dom';
import StarRating from '../Helper-Components/StarRating.jsx';
import { Category, Name, Price, Style, Size } from './Styled-Components/Styled-ProductInfo.js';

var ProductInfo = ({rating, category, name, price, style, size}) => {
// console.log(props);
  return (
    <div>
      <StarRating rating={rating}/>
      <Category>{category}</Category>
      <Name>{name}</Name>
      <Price>{price}</Price>
      <Style>{style}</Style>
      <Size>{size}</Size>
    </div>
  );
};

export default ProductInfo;
