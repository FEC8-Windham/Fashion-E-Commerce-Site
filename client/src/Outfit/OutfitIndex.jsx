import React, { useState, useEffect } from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';
import Modal from '../Helper-Components/Modal.jsx';

var OutfitIndex = (props) => {
  var relatedProducts = props.metaData.relatedProducts;
  var [modalState, setModalState] = useState(null);
  var [tempData, setData] = useState(null);

  useEffect(() => {
    if (modalState) {
      console.log('Modal:', modalState);
    }
  }, [modalState]);

  var clickHandler = (type, data) => {
    setModalState(type);
    setData(data);
  };

  return (
    <div>
      <hr></hr>
      <h1>Related Items and Comparison</h1>
      {Modal(modalState, tempData)}
      <RelatedProducts data={relatedProducts} clickHandler={clickHandler} />
      <YourOutfit />
      <hr></hr>
    </div>
  );
};

export default OutfitIndex;