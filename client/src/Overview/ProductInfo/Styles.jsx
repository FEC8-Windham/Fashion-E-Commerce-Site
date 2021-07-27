import React, {useState} from 'react';
import {StylesContainer} from '../Styled-Components/Styled-ProductInfo.js';
import StyleEntry from './StyleEntry.jsx';

var Styles = ({styles, setCurrStyleIndex}) => {


  return (
    <StylesContainer>
      {styles.map((style, i) => {
        return <StyleEntry key = {i} style = {style} setCurrStyleIndex ={setCurrStyleIndex} index = {i}/>;
      })}
    </StylesContainer>
  );
};

export default Styles;