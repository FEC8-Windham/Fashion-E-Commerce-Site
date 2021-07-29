import axios from 'axios';

export const getIP = () => {
  axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=756be8440a704898b7f9767779bad8a9')
    .then(response => {
      var ipAddress = response.data.ip_address;
      // console.log('IP Address:', ipAddress);
      localStorage.setItem('ip', ipAddress);
    });
};