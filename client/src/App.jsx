import React, {useState, useEffect} from 'react';
import OverviewIndex from './Overview/OverviewIndex.jsx';
import OutfitIndex from './Outfit/OutfitIndex.jsx';
import ReviewIndex from './Review/ReviewIndex.jsx';
import axios from 'axios';
import { getData } from './Controllers/getData.js';



var App = (props) => {

  var [loading, setLoading] = useState(false);
  var [metaData, setMetaData] = useState({
  });

  useEffect( async () => {
    setMetaData(await getData());
    setLoading(true);
  }, []);


  return (
    <div>
      {loading ? <OverviewIndex productInfo = {metaData.productInfo} productStyles = {metaData.productStyles} reviewMeta = {metaData.reviewMeta}/> : <div>Hi</div>}

      <div><OutfitIndex /></div>
      <div><ReviewIndex/></div>
    </div>
  );
};


export default App;