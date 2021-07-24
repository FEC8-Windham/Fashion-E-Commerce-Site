import React, {useState} from 'react';
import {Style} from './Styled-Components/Styled-ProductInfo.js';

var StyleEntry = ({style}) => {
  var [current, setCurrent] = useState({default: true});
  return (
    <Style src={style.photos[0].thumbnail_url}></Style>
  );
};

export default StyleEntry;