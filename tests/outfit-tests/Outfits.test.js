import React from 'react';
import 'regenerator-runtime/runtime';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
import { shallow, configure } from 'enzyme';

const sum = require('../sum');
import OutfitIndex from '../../client/src/Outfit/OutfitIndex.jsx';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('<MyComponent />', () => {
  it('OUTFIT <RelatedProducts /> components', () => {
    const wrapper = shallow(<OutfitIndex />);
    expect(wrapper.find('RelatedProducts').exists()).toBeFalsy();
  });

});