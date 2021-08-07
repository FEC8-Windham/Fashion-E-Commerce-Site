import React from 'react';
import { CartButton } from '../Styled-Components/Styled-ProductInfo';
import { getSKU } from '../../HelperFunctions';
import axios from 'axios';
import API_KEY from '../../config/config';

var AddButton = (({ isSizeSelected, setShowSelectSizeMessage, currSize, currStyle }) => {

  var clickHandler = () => {
    if (!isSizeSelected) {
      setShowSelectSizeMessage(true);
    } else {
      var sku = getSKU(currStyle, currSize);
      var config = {
        method: 'POST',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart',
        data:
        {
          sku_id: sku
        },
        headers: {
          'Authorization': API_KEY
        }
      };
      axios(config);
    }
  };

  return (
    <CartButton className='addToCart' onClick={clickHandler}>
      &nbsp;&nbsp;&nbsp;&nbsp;Add to Cart &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+
    </CartButton>
  );
});

export default AddButton;