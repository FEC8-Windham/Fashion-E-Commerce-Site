import React, {useState, useEffect} from 'react';
import OverviewIndex from './Overview/OverviewIndex.jsx';
import OutfitIndex from './Outfit/OutfitIndex.jsx';
import ReviewIndex from './Review/ReviewIndex.jsx';
import axios from 'axios';
import { getData } from './Controllers/getData.js';
import { calculateAverageRating, getDefaultStyle } from './HelperFunctions.js';


var App = (props) => {

  var [loaded, setLoaded] = useState(false);
  var [metaData, setMetaData] = useState(null);
  var [currStyle, setCurrStyle] = useState(null);
  var [averageRating, setAverageRating] = useState(0);
  var [originalPrice, setOriginalPrice] = useState(0);
  var [salePrice, setSalePrice] = useState(0);


  //getting all the data at once.
  useEffect( async () => {
    setMetaData(await getData());
    setLoaded(true);
  }, []);


  useEffect(() => {
    //Following will be invoked when currentStyle changes.
    if (currStyle) {
      setOriginalPrice(currStyle.original_price);
      setSalePrice(currStyle.sale_price);
    }
  }, [currStyle]);

  //Set the current style as default and average rating
  useEffect(()=> {
    if (metaData) {
      setCurrStyle(getDefaultStyle(metaData.productStyles));
      setAverageRating(calculateAverageRating(metaData.reviewMeta.ratings));
    }
  }, [metaData]);

  return (
    <div>
      {loaded ? <OverviewIndex productInfo = {metaData.productInfo} productStyles = {metaData.productStyles} currStyle = {currStyle} setCurrStyle = {setCurrStyle} averageRating= {averageRating} originalPrice = {originalPrice} salePrice = {salePrice}/> : <div>Loading...</div>}

      <div><OutfitIndex /></div>
      <div><ReviewIndex/></div>
    </div>
  );
};


export default App;