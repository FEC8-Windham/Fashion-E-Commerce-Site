import axios from 'axios';
import API_KEY from '../config/config';

export var getRelatedData = async (productId) => {
  var metaData = {};
  var config = {
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
    headers: {
      'Authorization': API_KEY
    }
  };

  config.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}`;
  var responseObj = await axios(config);
  var productInfo = responseObj.data;
  // name, category, default_price
  // console.log('Product Info:', productInfo);

  config.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/styles`;
  var responseObj = await axios(config);
  var productStyles = responseObj.data.results;
  // photos[0].url
  // console.log('Product Styles:', productStyles);

  config.params = {product_id: productId};
  config.url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta';
  var responseObj = await axios(config);
  var reviewMeta = responseObj.data;
  // console.log('Review Meta:', reviewMeta);

  metaData = {productInfo, productStyles, reviewMeta};

  return metaData;
};