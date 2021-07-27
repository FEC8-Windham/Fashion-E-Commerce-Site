import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import StarRating from '../../Helper-Components/StarRating.jsx';
import Styles from './Styles.jsx';
import ShareButton from './ShareButton.jsx';
import { Category, Name, OriginalPrice, SalePrice, Price, Style, Size, Description, Slogan } from '../Styled-Components/Styled-ProductInfo.js';

var ProductInfo = ({rating, category, name, styles, size, description, slogan}) => {

  var [currStyleIndex, setCurrStyleIndex] = useState(0);
  var [originalPrice, setOriginalPrice] = useState(styles[0].original_price);
  var [salePrice, setSalePrice] = useState(styles[0].sale_price);

  useEffect(() => {
    setOriginalPrice(styles[currStyleIndex].original_price);
    setSalePrice(styles[currStyleIndex].sale_price);
  });

  return (
    <div>
      <StarRating rating={rating}/>
      <Category>{category}</Category>
      <Name>{name}</Name>

      {salePrice ?
        <Price>
          <OriginalPrice sale>
          ${originalPrice}
          </OriginalPrice>
          <SalePrice>
            ${salePrice}
          </SalePrice>
        </Price> :
        <Price>
          <OriginalPrice>
          ${originalPrice}
          </OriginalPrice>
          <br></br>
        </Price>
      }

      <Styles styles = {styles} setCurrStyleIndex ={setCurrStyleIndex} />

      <Size>Largee</Size>
      <Slogan>{slogan}</Slogan>
      <Description>{description}</Description>
      <ShareButton/>
    </div>
  );
};

export default ProductInfo;
