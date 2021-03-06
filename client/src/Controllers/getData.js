import axios from 'axios';
import API_KEY from '../config/config';

export var getData = async () => {
  var metaData = {};
  var config = {
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
    headers: {
      'Authorization': API_KEY
    }
  };
  var responseObj = await axios(config);
  var productsList = responseObj.data;
  var productId = productsList[4].id;

  config.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}`;
  var responseObj = await axios(config);
  var productInfo = responseObj.data;

  config.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/styles`;
  var responseObj = await axios(config);
  var productStyles = responseObj.data.results;

  config.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/related`;
  var responseObj = await axios(config);
  var relatedProducts = responseObj.data;

  config.params = {product_id: productId, count: '100', sort: 'relevant'};
  config.url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews';
  var responseObj = await axios(config);
  var reviewList = responseObj.data;

  config.url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta';
  var responseObj = await axios(config);
  var reviewMeta = responseObj.data;

  metaData = {productsList, productId, productInfo, productStyles, relatedProducts, reviewList, reviewMeta};

  return metaData;

};