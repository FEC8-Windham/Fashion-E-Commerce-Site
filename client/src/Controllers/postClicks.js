import axios from 'axios';
import API_KEY from '../config/config';

const postClicks = (data) => {
  var config = {
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/interactions/',
    headers: {
      'Authorization': API_KEY,
      'Content-Type': 'application/json'
    },
    data: data
  };

  console.log('To be posted:', data);
  // axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
};

export default postClicks;