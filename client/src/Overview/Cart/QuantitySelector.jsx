import React from 'react';
import { QuantitySelect } from '../Styled-Components/Styled-ProductInfo';


var QuantitySelector = ({ selectedCount }) => {
  return (
    <div>
      {
        selectedCount === null ?
          <QuantitySelect defaultValue={'DEFAULT'} disabled>
            <option value='DEFAULT'>-</option>
          </QuantitySelect>
          :
          <QuantitySelect>{
            [...Array(selectedCount)].map((item, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </QuantitySelect>
      }
    </div>
  );
};

export default QuantitySelector;