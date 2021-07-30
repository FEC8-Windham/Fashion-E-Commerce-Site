import React, { useState, useEffect } from 'react';
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
  var [reviewDiv, setReviewDiv] = useState(null);

  useEffect(async () => {
    setMetaData(await getData());
    setLoaded(true);

    // Way to get exact element that is clicked and module it is contained in
    // Module will only show if the module div has an id 'moduleOverview / moduleOutfit / moduleReview'
    document.addEventListener('click', event => {
      console.log('Clicked: #' + event.path[0].id);
      event.path.forEach(element => {
        if (element.id && element.id.startsWith('module')) {
          console.log('Module:', element.id.slice(6));

        }
      });
    });

  }, []);

  useEffect(() => {
    if (metaData) {
      setStyles(setDefaultAsFirstStyle(metaData.productStyles));
      setAverageRating(calculateAverageRating(metaData.reviewMeta.ratings));
    }
  }, [metaData]);

  var getReviewDiv = (reviewRef) => {
    setReviewDiv(reviewRef.current);
  };

  return (
    <div>
      {loaded ? <OverviewIndex productInfo = {metaData.productInfo} averageRating= {averageRating} styles = {styles} reviewDiv ={reviewDiv}/> : <div>Loading...</div>}

      {loaded ? <div><OutfitIndex metaData={metaData} averageRating={averageRating} /></div> : null}

      {loaded ? <div><ReviewIndex reviewMeta={metaData.reviewMeta} getReviewDiv = {getReviewDiv} reviews={metaData.reviewList} /></div> : null}
    </div>
  );
};


export default App;