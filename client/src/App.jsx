import React, { useState, useEffect } from 'react';
import OverviewIndex from './Overview/OverviewIndex.jsx';
import OutfitIndex from './Outfit/OutfitIndex.jsx';
import ReviewIndex from './Review/ReviewIndex.jsx';
import axios from 'axios';
import { getData } from './Controllers/getData.js';
import { calculateAverageRating, getDefaultStyle, setDefaultAsFirstStyle } from './HelperFunctions.js';
import moment from 'moment';
import postClicks from './Controllers/postClicks.js';

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
    clickListener();
  }, []);

  const clickListener = () => {
    document.addEventListener('click', event => {
      var data, element, widget, time;
      var time = moment().format('LTS');
      // Only if the element has an id
      if (event.path[0].id) {
        element = event.path[0].id;
        console.log('Clicked: #' + element);

        event.path.forEach(element => {
          if (element.id && element.id.startsWith('module')) {
            widget = element.id.slice(6);
            console.log('Module:', widget);
          }
        });

        data = {
          'element': element,
          'widget': widget,
          'time': time
        };
        postClicks(data);
      } else {
        console.log(event.path[0], 'does not have an id.');
      }


    });
  };

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

      {loaded ? <div><ReviewIndex productInfo = {metaData.productInfo} reviews={metaData.reviewList} reviewMeta={metaData.reviewMeta } getReviewDiv = {getReviewDiv}/></div> : null}
    </div>
  );
};


export default App;