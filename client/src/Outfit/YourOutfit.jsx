import React, { useEffect, useState } from 'react';
import YourOutfitEntry from './YourOutfitEntry.jsx';
import { Container, RowContainer, SectionTitle, NextButton, PreviousButton, FadeoutRight } from './styles/Cards.style.js';

const YourOutfit = (props) => {
  var currentProduct = props.data;
  var [leftMost, setLeftMost] = useState(true);
  var [rightMost, setRightMost] = useState(false);
  var [display, setDisplay] = useState(null);
  var [yourOutfit, changeYourOutfit] = useState([
    {
      url: 'https://images.crocs.com/is/image/Crocs/204113_730_ALT140?&fmt=jpeg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,6,0&iccEmbed=0&printRes=72&wid=702&hei=586',
      category: 'Kicks',
      name: 'Crocs: Minion Edition',
      price: '459.99',
      salePrice: '459.98',
      rating: '0.5'
    },
    {
      url: 'https://i.pinimg.com/originals/81/fe/2f/81fe2fe93f3a60ccdd33f4fe16566374.jpg',
      category: 'Pants',
      name: 'Hip Jean Shorts',
      price: '19.99',
      salePrice: null,
      rating: '4.25'
    },
    {
      url: 'https://ih1.redbubble.net/image.632564302.1607/ssrco,classic_tee,womens,fafafa:ca443f4786,front_alt,square_product,600x600.jpg',
      category: 'Shirt',
      name: 'Bart T-Shirt',
      price: '10.49',
      salePrice: '0.99',
      rating: '5'
    }]);

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
              return <YourOutfitEntry key={item.name} item={item} last={true} />;
            } else {
              return <YourOutfitEntry key={item.name} item={item} />;
            }
          })}
        </RowContainer>
      </FadeoutRight>
      {!rightMost ? <NextButton onClick={clickHandlerRight}>{'>'}</NextButton> : null}
    </Container>
  );
};

export default YourOutfit;