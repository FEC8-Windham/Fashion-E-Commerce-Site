import React from 'react';
import YourOutfitEntry from './YourOutfitEntry.jsx';
import { Container, RowContainer, SectionTitle, NextButton, PreviousButton, Fadeout } from './styles/Cards.style.js';

const YourOutfit = (props) => {
  var clickHandlerLeft = () => {
    // console.log('Right button click!', document.querySelector('#outfitContainer').scrollLeft);
    document.querySelector('#outfitContainer').scrollLeft += 202;
  };

  var clickHandlerRight = () => {
    // console.log('Left button click!', document.querySelector('#outfitContainer').scrollLeft);
    document.querySelector('#outfitContainer').scrollLeft -= 202;
  };

  return (
    <Container>
      <SectionTitle>YOUR OUTFIT</SectionTitle>
      <PreviousButton onClick={clickHandlerRight}>{'<'}</PreviousButton>
      <RowContainer id="outfitContainer">
        <YourOutfitEntry />
        <YourOutfitEntry />
        <YourOutfitEntry />
        <YourOutfitEntry />
        <YourOutfitEntry />
        <YourOutfitEntry />
        <YourOutfitEntry />
      </RowContainer>
      <NextButton onClick={clickHandlerLeft}>{'>'}</NextButton>
    </Container>
  );
};

export default YourOutfit;