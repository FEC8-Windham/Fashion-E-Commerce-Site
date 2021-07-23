import React, {useState, useEffect} from 'react';
import OverviewIndex from './Overview/OverviewIndex.jsx';
import OutfitIndex from './Outfit/OutfitIndex.jsx';
import ReviewIndex from './Review/ReviewIndex.jsx';
import axios from 'axios';
import API_KEY from './config/config.js';
import { getData } from './Controllers/getData.js';



var App = (props) => {

  var [productsList, setProductsList] = useState({});


  useEffect(() => {
    getData();
  }, []);

  // var getInfo = () => {
  //   var config = {
  //     method: 'GET',
  //     url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products',
  //     headers: {
  //       'Authorization': API_KEY
  //     }
  //   };
  //   axios(config)
  //     .then((response) => {
  //       console.log(response.data);
  //       setProductsList(response.data);
  //     })
  //     .catch((error) => {
  //       console.log('error getting products list!!');
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <div><OverviewIndex productsList = {productsList}/></div>
      <div><OutfitIndex/></div>
      <div><ReviewIndex/></div>
    </div>
  );
};


export default App;