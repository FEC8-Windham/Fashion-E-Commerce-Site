import React, {useState, useEffect} from 'react';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import axios from 'axios';


var OverviewIndex = ({productInfo, averageRating, styles}) => {


  return (
    <div>
      <ProductInfo rating = {averageRating} category = {productInfo.category} name = {productInfo.name} styles = {styles} description= {productInfo.description} slogan = {productInfo.slogan}
      />

      <div>
      </div>
    </div>
  );
};

export default OverviewIndex;