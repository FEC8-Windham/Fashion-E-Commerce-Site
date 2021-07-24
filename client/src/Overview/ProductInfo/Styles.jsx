import React, {useState} from 'react';
import {StylesContainer} from '../Styled-Components/Styled-ProductInfo.js';
import StyleEntry from './StyleEntry.jsx';

var Styles = ({styles, setCurrStyle, currStyle}) => {
  console.log('curr', currStyle);

  return (
    <StylesContainer>
      {styles.map((style, i) => {
        return <StyleEntry style = {style} setCurrStyle = {setCurrStyle}/>;
      })}
    </StylesContainer>
  );
};

export default Styles;