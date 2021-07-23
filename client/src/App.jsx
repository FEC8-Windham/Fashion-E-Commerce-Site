import React, {useState, useEffect} from 'react';
import OverviewIndex from './Overview/OverviewIndex.jsx';
import OutfitIndex from './Outfit/OutfitIndex.jsx';
import ReviewIndex from './Review/ReviewIndex.jsx';
import axios from 'axios';
import { getData } from './Controllers/getData.js';



var App = (props) => {

  var [metaData, setMetaData] = useState({
    productsList: [],
    productId: 0,
    productInfo: {},
    productStyles: [],
    relatedProducts: [],
    reviewList: [],
    reviewMeta: []
  });

  useEffect( async () => {
    var metaData = await getData();
    setMetaData(metaData);
  }, []);



  return (
    <div>
      <div><OverviewIndex productInfo = {metaData.productInfo}/></div>
      <div><OutfitIndex/></div>
      <div><ReviewIndex/></div>
    </div>
  );
};


export default App;