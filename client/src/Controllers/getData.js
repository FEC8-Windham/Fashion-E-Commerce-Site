import axios from 'axios';
import API_KEY from '../config/config';

export var getData = async () => {
  var config = {
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products',
    headers: {
      'Authorization': API_KEY
    }
  };
  var responseObj = await axios(config);
  var productList = responseObj.data;
  var productId = productList[0].id;
  console.log('Product list ', productList);

  config.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}`;
  var responseObj = await axios(config);
  var productInfo = responseObj.data;
  console.log('Product Info:', productInfo);


  config.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}/styles`;
  var responseObj = await axios(config);
  var productStyles = responseObj.data.results;
  console.log('Product Styles:', productStyles);


  config.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productId}/related`;
  var relatedIds = await axios(config);
  var relatedIds = responseObj.data.results;
  console.log('Related IDs:', relatedIds);


  config.params = {product_id: productId};
  config.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`;
  var responseObj = await axios(config);
  var reviewList = responseObj.data.results;
  console.log('Review List:', reviewList);


  config.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta`;
  var responseObj = await axios(config);
  var reviewMeta = responseObj.data;
  console.log('Review Meta:', reviewMeta);

};