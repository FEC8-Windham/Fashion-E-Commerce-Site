import React, {useState, useEffect}from 'react';
import ProductInfo from './ProductInfo.jsx';
import axios from 'axios';
import API_KEY from '../config/config.js';




var OverviewIndex = ({productInfo}) => {
  var [currProductId, setCurrProductId] = useState(0);
  var [rating, setRating] = useState(5);
  // var [category, setCategory] = useState('Dipers');
  var [name, setName] = useState('exampleName');
  var [price, setPrice] = useState(99.99);
  var [styles, setStyles] = useState([]);
  var [size, setSize] = useState('L');
  var [description, setDescription] = useState
  ('exampleDescription');
  var [features, setFeatures] = useState({});

  console.log(productInfo);
  console.log(productInfo.category);



  return (
    <div>
      <ProductInfo rating = {rating} category = {productInfo.category} name = {productInfo.name} price = {productInfo.price} styles = {styles} size = {size} description = {productInfo.description}/>
    </div>
  );
};

export default OverviewIndex;