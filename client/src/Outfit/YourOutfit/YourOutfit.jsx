import React, { useEffect, useState } from 'react';
import YourOutfitEntry from './YourOutfitEntry.jsx';
import { Container, RowContainer, SectionTitle, NextButton, PreviousButton, FadeoutRight } from '../Styles/Cards.style.js';

const YourOutfit = (props) => {
  var currentProduct = props.data;
  var [leftMost, setLeftMost] = useState(true);
  var [rightMost, setRightMost] = useState(false);
  var [display, setDisplay] = useState(null);
  var [yourOutfit, changeYourOutfit] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('yourOutfit')) {
      var localOutfits = JSON.parse(localStorage.getItem('yourOutfit'));
      changeYourOutfit(localOutfits);
    }
  }, []);

  useEffect(() => {
    if (yourOutfit && yourOutfit.length <= 3) {
      setDisplay('none');
      setRightMost(true);
    } else if (yourOutfit && yourOutfit.length > 3) {
      setDisplay('linear-gradient(to right, black 80%, transparent)');
      setRightMost(false);
    } else {
      setDisplay('none');
      setRightMost(true);
    }

    if (yourOutfit) {
      var stringifiedOutfits = JSON.stringify(yourOutfit);
      localStorage.setItem('yourOutfit', stringifiedOutfits);
    }
  }, [yourOutfit]);

  var addClickHandler = (e) => {
    e.preventDefault();
    var containsObject = false;
    var names = [];
    if (yourOutfit) {
      for (var i = 0; i < yourOutfit.length; i++) {
        if (typeof yourOutfit[i] === 'object') {
          containsObject = true;
          names.push(yourOutfit[i].name);
        }
      }
      if (!names.includes(currentProduct.name)) {
        var temp = yourOutfit.slice();
        temp.unshift(currentProduct);
        changeYourOutfit(temp);
      } else if (!containsObject) {
        var temp = yourOutfit.slice();
        temp.unshift(currentProduct);
        changeYourOutfit(temp);
      } else {
        window.alert('Product already exists in "Your Outfit!"');
      }
    } else {
      var temp = [];
      temp.push(currentProduct);
      changeYourOutfit(temp);
    }
  };

  var deleteClickHandler = (e, item) => {
    e.preventDefault();
    var temp = yourOutfit.slice();
    temp.splice(temp.indexOf(item), 1);
    changeYourOutfit(temp);
  };

  var clickHandlerRight = () => {
    document.querySelector('#outfitContainer').scrollLeft += 260;

    const end = document.querySelector('#outfitContainer').scrollWidth - document.querySelector('#outfitContainer').scrollLeft - 1294;
    if (end <= 0) {
      setDisplay('none');
      setRightMost(true);
    }
    setLeftMost(false);
  };

  var clickHandlerLeft = () => {
    document.querySelector('#outfitContainer').scrollLeft -= 260;
    if (document.querySelector('#outfitContainer').scrollLeft <= 260) {
      setLeftMost(true);
    }

    setRightMost(false);
    setDisplay('linear-gradient(to right, black 80%, transparent)');
  };

  return (
    <Container>
      <SectionTitle>YOUR OUTFIT</SectionTitle>
      {!leftMost ? <PreviousButton onClick={clickHandlerLeft}>&#10094;</PreviousButton> : null}
      {!rightMost ? <NextButton onClick={clickHandlerRight}>&#10095;</NextButton> : null}
      <FadeoutRight mask={display}>
        <RowContainer id="outfitContainer">
          <YourOutfitEntry first={true} id='Add' click={addClickHandler} />
          {yourOutfit ?
            yourOutfit.map((item, i) => {
              if (yourOutfit[yourOutfit.length - 1] === item) {
                return <YourOutfitEntry key={item.name} delete={deleteClickHandler} item={item} last={true} />;
              } else {
                return <YourOutfitEntry key={item.name} delete={deleteClickHandler} item={item} />;
              }
            }) : null
          }
        </RowContainer>
      </FadeoutRight>
    </Container>
  );
};

export default YourOutfit;