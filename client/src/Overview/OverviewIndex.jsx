import React, {useState, useEffect} from 'react';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import axios from 'axios';
import { calculateAverageRating } from '../HelperFunctions.js';

var OverviewIndex = ({productInfo, productStyles, reviewMeta}) => {
  var [currStyle, setCurrStyle] = useState(productStyles[0]);
  var [price, setPrice] = useState(currStyle.original_price);
  var averageRating = calculateAverageRating(reviewMeta.ratings);
  console.log(productStyles);

  return (
    <div>
      <ProductInfo rating = {averageRating} category = {productInfo.category} name = {productInfo.name} price = {price} styles = {productStyles} />
    </div>
  );
};

export default OverviewIndex;