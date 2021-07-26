import React, { useState, useEffect } from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

var OutfitIndex = (props) => {
  var relatedProducts = props.metaData.relatedProducts;
  return (
    <div>
      <hr></hr>
      <h1>Related Items and Comparison</h1>
      <RelatedProducts data={relatedProducts}/>
      <YourOutfit />
      <hr></hr>
    </div>
  );
};

export default OutfitIndex;