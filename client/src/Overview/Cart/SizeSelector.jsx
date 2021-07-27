import React, {useState, useEffect} from 'react';
import { SizeSelect } from '../Styled-Components/Styled-ProductInfo';
import { getQuantityBySize } from '../../HelperFunctions';

var SizeSelector = ({currStyle, setSelectedCount}) => {

  var [xsCount, SetXsCount] = useState(0);
  var [sCount, SetSCount] = useState(0);
  var [mCount, SetMCount] = useState(0);
  var [lCount, SetLCount] = useState(0);
  var [xlCount, SetXlCount] = useState(0);
  var [totalCount, SetTotalCount] = useState(0);

  var changeHandler = (e) => {
    var count = Number(e.target.value);
    if (count > 15) {
      count = 15;
    }
    setSelectedCount(count);
  };

  useEffect(() => {
    var quantityObj = getQuantityBySize(currStyle);
    SetXsCount(quantityObj.XS);
    SetSCount(quantityObj.S);
    SetMCount(quantityObj.M);
    SetLCount(quantityObj.L);
    SetXlCount(quantityObj.XL);
    SetTotalCount(quantityObj.totalCount);
  }, []);

  return (
    <div>
      {(!totalCount) ?
        <SizeSelect defaultValue = {'DEFAULT'} disabled>
          <option value = 'DEFAULT'>OUT OF STOCK</option>
        </SizeSelect>
        :
        <SizeSelect defaultValue = {'DEFAULT'} onChange = {changeHandler}>
          <option value='DEFAULT' disabled>Select Size</option>
          {
            xsCount ? <option value = {xsCount}>XS</option> : null
          }
          {
            sCount ? <option value = {sCount}>S</option> : null
          }
          {
            mCount ? <option value = {mCount}>M</option> : null
          }
          {
            lCount ? <option value = {lCount}>L</option> : null
          }
          {
            xlCount ? <option value = {xlCount}>XL</option> : null
          }
        </SizeSelect>
      }
    </div>
  );
};

export default SizeSelector;

