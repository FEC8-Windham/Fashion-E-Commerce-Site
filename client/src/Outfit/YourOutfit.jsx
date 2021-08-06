import React, { useEffect, useState } from 'react';
import YourOutfitEntry from './YourOutfitEntry.jsx';
import { Container, RowContainer, SectionTitle, NextButton, PreviousButton, FadeoutRight } from './styles/Cards.style.js';

const YourOutfit = (props) => {
  var [leftMost, setLeftMost] = useState(true);
  var [rightMost, setRightMost] = useState(false);
  var [display, setDisplay] = useState(null);

  var relatedProducts = [1, 2, 3, 4, 5];

  useEffect(() => {
    if (relatedProducts.length <= 3) {
      setDisplay('none');
      setRightMost(true);
    }
  }, []);

  var clickHandlerRight = async (e) => {
    document.querySelector('#outfitContainer').scrollLeft += 202;
    const end = document.querySelector('#outfitContainer').scrollWidth - document.querySelector('#outfitContainer').scrollLeft - 990;
    if (end <= 0) {
      console.log('End of scroll');
      setDisplay('none');
      setRightMost(true);
    }
    setLeftMost(false);
  };

  var clickHandlerLeft = () => {
    document.querySelector('#outfitContainer').scrollLeft -= 202;
    if (document.querySelector('#outfitContainer').scrollLeft < 203) {
      setLeftMost(true);
    }
    setRightMost(false);
    setDisplay('linear-gradient(to right, black 80%, transparent)');
  };

  return (
    <Container>
      <SectionTitle>YOUR OUTFIT</SectionTitle>
      {!leftMost ? <PreviousButton onClick={clickHandlerLeft}>{'<'}</PreviousButton> : null}
      <FadeoutRight mask={display}>
        <RowContainer id="outfitContainer">
          <YourOutfitEntry first={true} />
          {relatedProducts.map(item => {
            if (relatedProducts[relatedProducts.length - 1] === item) {
              return <YourOutfitEntry key={item} item={item} last={true} />;
            } else {
              return <YourOutfitEntry key={item} item={item} />;
            }
          })}
        </RowContainer>
      </FadeoutRight>
      {!rightMost ? <NextButton onClick={clickHandlerRight}>{'>'}</NextButton> : null}
    </Container>
  );
};

export default YourOutfit;