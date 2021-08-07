import React, { useState, useEffect } from 'react';
import NavBar from './NavBar/NavBar.jsx';
import OverviewIndex from './Overview/OverviewIndex.jsx';
import OutfitIndex from './Outfit/OutfitIndex.jsx';
import ReviewIndex from './Review/ReviewIndex.jsx';
import axios from 'axios';
import { getData } from './Controllers/getData.js';
import { calculateAverageRating, getDefaultStyle, setDefaultAsFirstStyle, navBarScroll } from './HelperFunctions.js';
import clickTrackerHOC from './ClickTrackerHOC.jsx';

var App = (props) => {

  var [loaded, setLoaded] = useState(false);
  var [metaData, setMetaData] = useState(null);
  var [styles, setStyles] = useState(null);
  var [averageRating, setAverageRating] = useState(0);
  var [reviewDiv, setReviewDiv] = useState(null);
  var [currentId, setCurrentId] = useState(null);

  useEffect(async () => {
    setMetaData(await getData());
    setLoaded(true);
    navBarScroll();
  }, []);

  useEffect(async () => {
    if (currentId) {
      setMetaData(await getData(currentId));
    }
  }, [currentId]);

  useEffect(() => {
    if (metaData) {
      setStyles(setDefaultAsFirstStyle(metaData.productStyles));
      setAverageRating(calculateAverageRating(metaData.reviewMeta.ratings));
    }
  }, [metaData]);

  var changeProduct = (id) => {
    setCurrentId(id);
  };

  var getReviewDiv = (reviewRef) => {
    setReviewDiv(reviewRef.current);
  };

  return (
    <div onClick={props.click}>
      <NavBar />
      {loaded ? <OverviewIndex productInfo = {metaData.productInfo} averageRating= {averageRating} styles = {styles} reviewDiv ={reviewDiv}/> : <div>Loading...</div>}

      {loaded ? <div><OutfitIndex metaData={metaData} averageRating={averageRating} changeProduct={changeProduct}/></div> : null}

      {loaded ? <div><ReviewIndex productInfo = {metaData.productInfo} reviews={metaData.reviewList} reviewMeta={metaData.reviewMeta } getReviewDiv = {getReviewDiv}/></div> : null}
    </div>
  );
};


export default clickTrackerHOC(App);