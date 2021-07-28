import React, {useState, useEffect} from 'react';
import StarRating from '../../Helper-Components/StarRating.jsx';
import Styles from './Styles.jsx';
import ShareButton from './ShareButton.jsx';
import { Category, Name, OriginalPrice, SalePrice, Price, Style, Size, Description, Slogan } from '../Styled-Components/Styled-ProductInfo.js';

var ProductInfo = ({rating, category, name, styles, size, description, slogan, originalPrice, salePrice, currStyleIndex, setCurrStyleIndex}) => {

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

      <Styles styles = {styles} setCurrStyleIndex ={setCurrStyleIndex} currStyleIndex= {currStyleIndex} />
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Slogan>{slogan}</Slogan>
      <Description>{description}</Description> */}
      <ShareButton/>
    </div>
  );
};

export default ProductInfo;
