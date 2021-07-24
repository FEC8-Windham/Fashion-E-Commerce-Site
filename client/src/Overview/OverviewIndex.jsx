import React, {useState, useEffect} from 'react';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import axios from 'axios';


var OverviewIndex = ({productInfo, productStyles, setCurrStyle, currStyle, setAverageRating, averageRating, originalPrice, salePrice}) => {


  return (
    <div>
      <ProductInfo rating = {averageRating} category = {productInfo.category} name = {productInfo.name} styles = {productStyles} setCurrStyle = {setCurrStyle} currStyle ={currStyle} originalPrice = {originalPrice} salePrice = {salePrice}/>
      <div></div>
    </div>
  );
};

export default OverviewIndex;