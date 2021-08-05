import React, { useRef } from 'react';

const higherOrderComponent = (WrappedComponent) => {
  const HigherOrderComponent = () => {
    const inputEl = useRef(null);

    const onButtonClick = () => {
      console.log('Click!');
      console.log(props.inputEl.current);
    };

    return <WrappedComponent ref={inputEl} onClick={onButtonClick} />;
  };

  return HigherOrderComponent;
};

export default higherOrderComponent;