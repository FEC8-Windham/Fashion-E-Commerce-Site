import React, {useState, useEffect} from 'react';
import OverviewIndex from './Overview/OverviewIndex.jsx';
import OutfitIndex from './Outfit/OutfitIndex.jsx';
import ReviewIndex from './Review/ReviewIndex.jsx';
import axios from 'axios';
import { getData } from './Controllers/getData.js';



var App = (props) => {

  var [loaded, setLoaded] = useState(false);
  var [metaData, setMetaData] = useState({});
  var [currStyle, setCurrStyle] = useState(null);
  var [averageRating, setAverageRating] = useState(0);

  useEffect( async () => {
    setMetaData(await getData());
    setLoaded(true);
  }, []);

  return (
    <div>
      {loaded ? <OverviewIndex productInfo = {metaData.productInfo} productStyles = {metaData.productStyles} reviewMeta = {metaData.reviewMeta} currStyle = {currStyle}setCurrStyle = {setCurrStyle} setAverageRating ={setAverageRating} averageRating= {averageRating}/> : <div>Loading...</div>}
      {loaded ? <div><OutfitIndex metaData={metaData}/></div> : null}
      <div><ReviewIndex/></div>
    </div>
  );
};


export default App;