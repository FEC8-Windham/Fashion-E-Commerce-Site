import axios from 'axios';
import API_KEY from '../config/config';

const postClicks = (data) => {
  var config = {
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/interactions/',
    headers: {
      'Authorization': API_KEY,
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default postClicks;