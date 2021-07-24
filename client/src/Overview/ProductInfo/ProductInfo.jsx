import React, {useState} from 'react';
import { render } from 'react-dom';
import StarRating from '../../Helper-Components/StarRating.jsx';
import Styles from './Styles.jsx';
import { Category, Name, Price, Style, Size, Description } from '../Styled-Components/Styled-ProductInfo.js';

var ProductInfo = ({rating, category, name, price, styles, size}) => {


  return (
    <div>
      <StarRating rating={rating}/>
      <Category>{category}</Category>
      <Name>{name}</Name>
      <Price>${price}</Price>
      <Styles styles = {styles}/>
      <Size>{size}</Size>
      <Description></Description>
    </div>
  );
};

export default ProductInfo;
