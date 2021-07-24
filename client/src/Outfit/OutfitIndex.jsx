import React, { useState, useEffect } from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

var OutfitIndex = (props) => {

  var productInfo = props.metaData.productStyles;
  console.log('productInfo', productInfo);

  return (
    <div>
      <hr></hr>
      <h1>Related Items and Comparison</h1>
      <RelatedProducts />
      <YourOutfit />
      <hr></hr>
    </div>
  );
};

export default OutfitIndex;