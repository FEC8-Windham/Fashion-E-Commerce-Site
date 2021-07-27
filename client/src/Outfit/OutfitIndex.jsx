import React, { useState, useEffect } from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';
import ComparisonModal from './ComparisonModal.jsx';

var OutfitIndex = (props) => {
  var relatedProducts = props.metaData.relatedProducts;
  const [openp, setOpenP] = useState(false);
  const [modalData, setData] = useState(null);

  var clickHandler = (data) => {
    console.log('Click!');
    setData(data);
    setOpenP(true);
  };

  return (
    <div>
      <ComparisonModal
        message={modalData}
        isOpen={openp}
        onClose={() => setOpenP(false)}
      />
      <hr></hr>
      <h1>Related Items and Comparison</h1>
      <div id="modalHere"></div>
      <RelatedProducts data={relatedProducts} clickHandler={clickHandler} />
      <YourOutfit />
      <hr></hr>
    </div>
  );
};

export default OutfitIndex;