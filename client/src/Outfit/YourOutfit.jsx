import React from 'react';
import YourOutfitEntry from './YourOutfitEntry.jsx';
import { RowContainer, Fadeout, NextButton } from './styles/Cards.style.js';

const YourOutfit = (props) => {
  return (
    <RowContainer>
      <YourOutfitEntry />
      <YourOutfitEntry />
      <YourOutfitEntry />
      <Fadeout>
        <YourOutfitEntry />
      </Fadeout>
      <NextButton>{'>'}</NextButton>
    </RowContainer>
  );
};

export default YourOutfit;