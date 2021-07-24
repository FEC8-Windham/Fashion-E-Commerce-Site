import React, {useState, useEffect} from 'react';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import axios from 'axios';
import { calculateAverageRating, getDefaultStyle } from '../HelperFunctions.js';

var OverviewIndex = ({productInfo, productStyles, reviewMeta, setCurrStyle, currStyle, setAverageRating, averageRating}) => {
  useEffect(()=> {
    setCurrStyle(getDefaultStyle(productStyles));
    setAverageRating(calculateAverageRating(reviewMeta.ratings));

  }, []);
  var price = 0;

  return (
    <div>
      <ProductInfo rating = {averageRating} category = {productInfo.category} name = {productInfo.name} price = {price} styles = {productStyles} setCurrStyle = {setCurrStyle} currStyle ={currStyle} />
    </div>
  );
};

export default OverviewIndex;