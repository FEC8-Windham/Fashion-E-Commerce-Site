import React, { useEffect, useState } from 'react';
import YourOutfitEntry from './YourOutfitEntry.jsx';
import { Container, RowContainer, SectionTitle, NextButton, PreviousButton, FadeoutRight } from './styles/Cards.style.js';

const YourOutfit = (props) => {
  var currentProduct = props.data;
  var [leftMost, setLeftMost] = useState(true);
  var [rightMost, setRightMost] = useState(false);
  var [display, setDisplay] = useState(null);
  var [yourOutfit, changeYourOutfit] = useState([1, 2, 3]);

  useEffect(() => {
    if (yourOutfit.length <= 3) {
      setDisplay('none');
      setRightMost(true);
    }
  }, []);

  useEffect(() => {
    if (yourOutfit.length > 3) {
      setDisplay('linear-gradient(to right, black 80%, transparent)');
      setRightMost(false);
    }
  }, [yourOutfit]);

  // Add current product to front of YOUR OUTFIT if not exist
  var addClickHandler = (e) => {
    e.preventDefault();
    var containsObject = false;
    for (var i = 0; i < yourOutfit.length; i++) {
      if (typeof yourOutfit[i] === 'object') {
        containsObject = true;
        if (currentProduct.name !== yourOutfit[i].name) {
          var temp = yourOutfit.slice();
          temp.unshift(currentProduct);
          changeYourOutfit(temp);
        } else {
          window.alert('Product already exists in "Your Outfit!"');
        }
      }
    }
    if (!containsObject) {
      var temp = yourOutfit.slice();
      temp.unshift(currentProduct);
      changeYourOutfit(temp);
    }
  };

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
          <YourOutfitEntry first={true} click={addClickHandler} />
          {yourOutfit.map(item => {
            if (yourOutfit[yourOutfit.length - 1] === item) {
              return <YourOutfitEntry key={item.toString()} item={item} last={true} />;
            } else {
              return <YourOutfitEntry key={item.toString()} item={item} />;
            }
          })}
        </RowContainer>
      </FadeoutRight>
      {!rightMost ? <NextButton onClick={clickHandlerRight}>{'>'}</NextButton> : null}
    </Container>
  );
};

export default YourOutfit;