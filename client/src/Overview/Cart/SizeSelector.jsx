import React, { useState, useEffect, useRef } from 'react';
import { SizeSelect } from '../Styled-Components/Styled-ProductInfo';
import { getQuantityBySize } from '../../HelperFunctions';

var SizeSelector = ({ currStyle, setSelectedCount, setIsSizeSelected, setIsOutOfStock, setShowSelectSizeMessage, setCurrSize, setSizeSelectRef}) => {
  var [xsCount, SetXsCount] = useState(0);
  var [sCount, SetSCount] = useState(0);
  var [mCount, SetMCount] = useState(0);
  var [lCount, SetLCount] = useState(0);
  var [xlCount, SetXlCount] = useState(0);
  var [totalCount, SetTotalCount] = useState(0);


  var changeHandler = (e) => {
    if (e.target.value === 'DEFAULT') {
      setIsSizeSelected(false);
      setSelectedCount(null);
      return;
    }
    var index = e.target.selectedIndex;
    var size = e.target[index].text;
    var count = Number(e.target.value);

    if (count > 15) {
      count = 15;
    }

    setCurrSize(size);
    setSelectedCount(count);
    setIsSizeSelected(true);
    setShowSelectSizeMessage(false);

  };


  useEffect(() => {

    var quantityObj = getQuantityBySize(currStyle);

    SetXsCount(quantityObj.XS);
    SetSCount(quantityObj.S);
    SetMCount(quantityObj.M);
    SetLCount(quantityObj.L);
    SetXlCount(quantityObj.XL);
    SetTotalCount(quantityObj.totalCount);

    if (!quantityObj.totalCount) {
      setIsOutOfStock(true);
    }
  }, []);

  return (
    <div>
      {(!totalCount) ?
        <SizeSelect defaultValue={'DEFAULT'} disabled>
          <option value='DEFAULT'>OUT OF STOCK</option>
        </SizeSelect>
        :
        <SizeSelect defaultValue={'DEFAULT'} onChange={changeHandler} >
          <option value='DEFAULT' >Select Size</option>
          {
            xsCount ? <option value={xsCount}>XS</option> : null
          }
          {
            sCount ? <option value={sCount}>S</option> : null
          }
          {
            mCount ? <option value={mCount}>M</option> : null
          }
          {
            lCount ? <option value={lCount}>L</option> : null
          }
          {
            xlCount ? <option value={xlCount}>XL</option> : null
          }
        </SizeSelect>
      }
    </div>
  );
};

export default SizeSelector;

