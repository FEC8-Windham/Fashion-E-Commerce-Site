import React, { useState, useEffect } from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

var OutfitIndex = (props) => {
  return (
    <div>
      <hr></hr>
      Realted Products and My Outfit Component!
      <RelatedProducts />
      <YourOutfit />
    </div>
  );
};

export default OutfitIndex;