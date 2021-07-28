import React, { useState, useEffect } from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';
import ComparisonModal from './ComparisonModal.jsx';

var OutfitIndex = (props) => {
  var currentProduct = props.metaData.productInfo;
  currentProduct.numberStyles = props.metaData.productStyles.length;
  currentProduct.rating = props.averageRating;
  currentProduct.sale = props.metaData.productStyles.sale_price;
  currentProduct.style1 = props.metaData.productStyles[0];
  currentProduct.url = props.metaData.productStyles[0].photos[0].url;
  var relatedProducts = props.metaData.relatedProducts;
  const [openp, setOpenP] = useState(false);
  const [modalData, setData] = useState(null);

  var clickHandler = (data, numberStyles, rating) => {
    data.numberStyles = numberStyles;
    data.rating = rating;
    setData(data);
    setOpenP(true);
  };

  return (
    <div>
      <ComparisonModal
        relatedData={modalData}
        currentData={currentProduct}
        isOpen={openp}
        onClose={() => setOpenP(false)}
      />
      <hr></hr>
      <h1>Related Items and Comparison</h1>
      <div id="modalHere"></div>
      <RelatedProducts data={relatedProducts} clickHandler={clickHandler} />
      <YourOutfit data={currentProduct}/>
      <hr></hr>
    </div>
  );
};

export default OutfitIndex;