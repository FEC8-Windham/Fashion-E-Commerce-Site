

import React from 'react';
// import { shallow } from 'enzyme';
// import App from './App.jsx';
// describe('MyComponent', () => {
//   it('should render correctly in "debug" mode', () => {
//     const component = shallow(<MyComponent debug />);

//     expect(component).toMatchSnapshot();
//   });
// });

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});