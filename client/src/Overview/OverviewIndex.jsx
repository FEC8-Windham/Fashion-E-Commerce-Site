import React, {useState, useEffect}from 'react';
import ProductInfo from './ProductInfo.jsx';
import axios from 'axios';
import API_KEY from '../config/config.js';




var OverviewIndex = ({productsList}) => {
  var [currProductId, setCurrProductId] = useState(0);
  var [rating, setRating] = useState(5);
  var [category, setCategory] = useState('Dipers');
  var [name, setName] = useState('exampleName');
  var [price, setPrice] = useState(99.99);
  var [styles, setStyles] = useState([]);
  var [size, setSize] = useState('L');
  var [description, setDescription] = useState
  ('exampleDescription');
  var [features, setFeatures] = useState({});

  // useEffect(() => {
  //   setCurrProductId(productsList.id);
  //   setCategory(productsList.category);
  //   setName(productsList.name);
  //   setPrice(productsList.default_price);
  //   console.log('this is the list', productsList);
  //   console.log('this is proID', currProductId);
  //   var config = {
  //     method: 'GET',
  //     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${currProductId}`,
  //     headers: {
  //       'Authorization': API_KEY
  //     }
  //   };

  //   axios(config)
  //     .then((response) => {
  //       setDescription(response.description);
  //       setFeatures(response.features);
  //       var config = {
  //         method: 'GET',
  //         url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${currProductId}/styles`,
  //         headers: {
  //           'Authorization': API_KEY
  //         }
  //       };
  //       axios(config)
  //         .then((response) => {
  //           setStyles(response.results);
  //         })
  //         .catch((error) => {
  //           console.log('error getting styles!!!');
  //           console.log(error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.log('error getting product info!!');
  //       console.log(error);
  //     });

  // }, []);

  return (
    <div>
      <ProductInfo rating = {rating} category = {category} name = {name} price = {price} styles = {styles} size = {size} description = {description}/>
    </div>
  );
};

export default OverviewIndex;