import React from 'react';
import { shallow } from 'enzyme';

import Mood from './index';

const render = ({ mood = '' } = {}) => {
  const props = { mood };
  return shallow(<Mood {...props} />);
};

describe('Mood', () => {
  test('default render is as expected', () => expect(render()).toMatchSnapshot());

  test('sad is rendered is as expected', () => expect(render({ mood: 'sad' })).toMatchSnapshot());

  test('tired is rendered is as expected', () => expect(render({ mood: 'tired' })).toMatchSnapshot());

  test('confused is rendered is as expected', () => expect(render({ mood: 'confused' })).toMatchSnapshot());

  test('hungry is rendered is as expected', () => expect(render({ mood: 'hungry' })).toMatchSnapshot());
});
