import React, { useState } from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import AddButton from './AddButton.jsx';
import { CartContainer, SizeMessage } from '../Styled-Components/Styled-ProductInfo.js';

var Cart = ({ currStyle }) => {

  var [selectedCount, setSelectedCount] = useState(null);
  var [isSizeSelected, setIsSizeSelected] = useState(false);
  var [isOutOfStock, setIsOutOfStock] = useState(false);
  var [showSelectSizeMessage, setShowSelectSizeMessage] = useState(false);
  var [currSize, setCurrSize] = useState(null);


  return (
    <CartContainer>
      {(showSelectSizeMessage) ?
        <SizeMessage>
          Please Select Size
        </SizeMessage> : <SizeMessage></SizeMessage>}

      <SizeSelector currStyle={currStyle} setSelectedCount={setSelectedCount} setIsSizeSelected={setIsSizeSelected} setIsOutOfStock={setIsOutOfStock} setShowSelectSizeMessage={setShowSelectSizeMessage} setCurrSize={setCurrSize} />

      <QuantitySelector selectedCount={selectedCount} />

      {isOutOfStock ? null : <AddButton isSizeSelected={isSizeSelected} setShowSelectSizeMessage={setShowSelectSizeMessage} currStyle={currStyle} currSize={currSize} />}
    </CartContainer>
  );
};


export default Cart;