import React from 'react';
import YourOutfitEntry from './YourOutfitEntry.jsx';
import { RowContainer, SectionTitle, Fadeout, NextButton } from './styles/Cards.style.js';

const YourOutfit = (props) => {
  return (
    <RowContainer>
      <SectionTitle>YOUR OUTFIT</SectionTitle>
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