import React, { useRef } from 'react';

// src/Outfit/RelatedProducts.jsx

/*     Using forwardRef    */
// const higherOrderComponent = (WrappedComponent) => {
//   const HigherOrderComponent = (props) => {
//     const inputEl = useRef(null);
//     const {forwardedRef, ...rest} = props;
//     const onButtonClick = () => {
//       console.log('Click!');
//       console.log(inputEl.current);
//     };
//     return <WrappedComponent onClick={onButtonClick} ref={forwardedRef} {...rest}/>;
//   };
//   return React.forwardRef((props, ref) => {
//     return <HigherOrderComponent {...props} forwardedRef={ref}/>;
//   });
// };

/*   Class not working - not sure how to declare inputEl   */
// const higherOrderComponent = (WrappedComponent) => {
//   class HigherOrderComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.inputEl = useRef(null);
//       this.onButtonClick = this.onButtonClick.bind(this);
//     }
//     onButtonClick () {
//       console.log('Click!');
//       console.log(this.inputEl.current);
//     }
//     render () {
//       return <WrappedComponent onClick={this.onButtonClick} ref={this.inputEl} {...this.props}/>;
//     }
//   }
//   return HigherOrderComponent;
// };

/* Original function that I created  */
const higherOrderComponent = (WrappedComponent) => {
  const HigherOrderComponent = (props) => {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      console.log('Click!');
      console.log(inputEl.current);
    };
    return <WrappedComponent onClick={onButtonClick} {...props}/>;
  };
  return HigherOrderComponent;
};

export default higherOrderComponent;