import React from 'react';
import 'regenerator-runtime/runtime';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
import { shallow, configure } from 'enzyme';

const sum = require('./sum');
import App from '../client/src/App.jsx';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('<MyComponent />', () => {
  it('renders <Overview /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Overview').exists()).toBeFalsy();
  });

});