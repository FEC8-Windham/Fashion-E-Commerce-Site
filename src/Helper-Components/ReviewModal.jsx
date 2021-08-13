import React, { useState } from 'react';
import styled from 'styled-components';
import { Float, Close } from '../Review/Styles/ReviewStyles';



const ReviewModal = (props) => {

  return (

    !props.closed ?
      <Float>
        <img src={props.chosenPhoto}></img><Close onClick={props.closeModal}>Close X</Close>
      </Float>

      : null

  );
};

export default ReviewModal;