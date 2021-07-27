import React, { useState } from 'react';
import styled from 'styled-components';



const ReviewModal = (props) => {

  var Float = styled.div`
    display: flex; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    justify-content: center;
  `;

  var Close = styled.button`
    position: absolute;
    left: 0;
    top: 0;
  `;

  return (

    !props.closed ?
      <Float>
        <img src={props.chosenPhoto}></img><Close onClick={props.closeModal}>Close X</Close>
      </Float>

      : null

  );
};

export default ReviewModal;