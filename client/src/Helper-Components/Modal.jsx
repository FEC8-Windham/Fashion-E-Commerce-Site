import React from 'react';
import { Background } from './Modal.style';

const Modal = (component) => {

  // Overview Modal
  if (component === 'overview') {
    return (
      <Background>
        Overview!
      </Background>
    );
  }

  // Related Products Modal
  if (component === 'comparison') {
    return (
      <div>
        Related Products Comparison!
      </div>
    );
  }

  // Reviews Modal
  if (component === 'newReview') {
    return (
      <div>
        New review form!
      </div>
    );
  } else if (component === 'reviewImage') {
    return (
      <Background>
        Review!
      </Background>
    );
  }

};

export default Modal;