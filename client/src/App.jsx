import React, {useState, useEffect} from 'react';
import OverviewIndex from './Overview/OverviewIndex.jsx';
import OutfitIndex from './Outfit/OutfitIndex.jsx';
import ReviewIndex from './Review/ReviewIndex.jsx';
import axios from 'axios';
import { getData } from './Controllers/getData.js';
import { calculateAverageRating, getDefaultStyle, setDefaultAsFirstStyle } from './HelperFunctions.js';

var App = (props) => {

  var [loaded, setLoaded] = useState(false);
  var [metaData, setMetaData] = useState(null);
  var [styles, setStyles] = useState(null);
  var [averageRating, setAverageRating] = useState(0);
  var [originalPrice, setOriginalPrice] = useState(0);
  var [salePrice, setSalePrice] = useState(0);


  //getting all the data at once.
  useEffect( async () => {
    setMetaData(await getData());
    setLoaded(true);
  }, []);

  useEffect(()=> {
    if (metaData) {
      setStyles(setDefaultAsFirstStyle(metaData.productStyles));
      setAverageRating(calculateAverageRating(metaData.reviewMeta.ratings));
    }
  }, [metaData]);

  return (
    <div>
      {loaded ? <OverviewIndex productInfo = {metaData.productInfo} averageRating= {averageRating} styles = {styles}/> : <div>Loading...</div>}

      {loaded ? <div><OutfitIndex metaData={metaData} averageRating={averageRating}/></div> : null}

      {loaded ? <div><ReviewIndex reviewMeta={metaData.reviewMeta }reviews={metaData.reviewList}/></div> : null}
    </div>
  );
};


export default App;