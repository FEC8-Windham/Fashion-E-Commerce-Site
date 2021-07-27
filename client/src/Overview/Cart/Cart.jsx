import React, {useState} from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

var Cart = ({currStyle}) => {

  var [selectedCount, setSelectedCount] = useState(null);


  return (
    <div>
      <SizeSelector currStyle = {currStyle} setSelectedCount = {setSelectedCount}/>
      <QuantitySelector selectedCount = {selectedCount}/>
    </div>
  );
};


export default Cart;