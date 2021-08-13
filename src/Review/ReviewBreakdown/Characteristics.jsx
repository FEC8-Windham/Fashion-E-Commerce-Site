import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, CharIndicator, NoPadContainer, CharLabelFlex, CharLabelDiv, CharBackG } from '../Styles/ReviewStyles';


const Characteristics = (props) => {
  const qualities = props.char;
  const rating = (Number(props.obj.value) - .5) * 20;
  const properties = {

    Size: {
      left: 'A size too small',
      middle: 'Perfect',
      right: 'A size to wide'
    },
    Width: {
      left: 'Too narrow',
      middle: 'Perfect',
      right: 'Too wide'
    },
    Comfort: {
      left: 'Uncomfortable',
      middle: 'Ok',
      right: 'Perfect'
    },
    Quality: {
      left: 'Poor',
      middle: 'What I expected',
      right: 'Perfect'
    },
    Length: {
      left: 'Runs Short',
      middle: 'Perfect',
      right: 'Runs long'
    },
    Fit: {
      left: 'Runs tight',
      middle: 'Perfect',
      right: 'A size to wide'
    }
  };




  return (

    <Container width={'95%'} bgColor={'violet'}>{props.char}
      <NoPadContainer>

        <CharBackG><CharIndicator position={`${rating}%`}></CharIndicator></CharBackG>

      </NoPadContainer>

      <CharLabelFlex>

        <CharLabelDiv align={'left'}>{properties[qualities].left}</CharLabelDiv>
        <CharLabelDiv align={'center'}>{properties[qualities].middle}</CharLabelDiv>
        <CharLabelDiv align={'right'}>{properties[qualities].right}</CharLabelDiv>



      </CharLabelFlex>

    </Container>


  );
};

export default Characteristics;