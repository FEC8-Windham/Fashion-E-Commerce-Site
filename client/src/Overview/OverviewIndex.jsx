import React, {useState, useEffect} from 'react';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import Cart from './Cart/Cart.jsx';
import axios from 'axios';


var OverviewIndex = ({productInfo, averageRating, styles}) => {

  var [currStyleIndex, setCurrStyleIndex] = useState(0);
  var [originalPrice, setOriginalPrice] = useState(styles[0].original_price);
  var [salePrice, setSalePrice] = useState(styles[0].sale_price);

  useEffect(() => {
    setOriginalPrice(styles[currStyleIndex].original_price);
    setSalePrice(styles[currStyleIndex].sale_price);
  });

  return (
    <div>
      <ProductInfo rating = {averageRating} category = {productInfo.category} name = {productInfo.name} styles = {styles} description= {productInfo.description} slogan = {productInfo.slogan} originalPrice = {originalPrice} salePrice = {salePrice} currStyleIndex = {currStyleIndex} setCurrStyleIndex = {setCurrStyleIndex}
      />
      <Cart currStyle = {styles[currStyleIndex]}/>

    </div>
  );
};

export default OverviewIndex;