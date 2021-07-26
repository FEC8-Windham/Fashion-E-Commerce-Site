import React from 'react';
import { Nothing, Background, OverviewModal, ComparisonModalContainer, ComparisonModal, NewReviewModal, ReviewImageModal} from './Modal.style';

const Modal = (component, data) => {

  console.log('Modal function called!');

  if (!component) {
    console.log('Nothing!');
    return (
      <Nothing />
    );
  } else if (component === 'overview') {
    return (
      <Background>
        <OverviewModal></OverviewModal>
      </Background>
    );
  } else if (component === 'comparison') {
    return (
      <div>
        <ComparisonModalContainer>
          <ComparisonModal>
            {data}
          </ComparisonModal>
        </ComparisonModalContainer>
      </div>
    );
  } else if (component === 'newReview') {
    return (
      <div>
        <NewReviewModal></NewReviewModal>
      </div>
    );
  } else if (component === 'reviewImage') {
    return (
      <Background>
        <ReviewImageModal></ReviewImageModal>
      </Background>
    );
  }

};

export default Modal;