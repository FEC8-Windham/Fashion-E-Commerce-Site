import React, {useState} from 'react';
import {StylesContainer} from '../Styled-Components/Styled-ProductInfo.js';
import StyleEntry from '../StyleEntry.js';

var Styles = ({styles}) => {


  console.log(styles);
  return (
    <StylesContainer>
      {styles.map((style, i) => {
        return <StyleEntry style = {style}/>;
      })}
    </StylesContainer>
  );
};

export default Styles;