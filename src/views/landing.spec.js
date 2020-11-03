import React from 'react';
import { shallow } from 'enzyme';

import { useDataContext } from 'contexts/data-context';
import { Button } from '@material-ui/core';

import LandingView from './landing';

jest.mock('contexts/data-context');

const render = ({ mood = '' } = {}) => shallow(<LandingView {...{ mood }} />);

describe('LandingView renders', () => {
  const getMood = () => {};

  beforeEach(() => {
    jest.clearAllMocks();
    useDataContext.mockReturnValue({ getMood });
  });

  test('default render is as expected', () => expect(render()).toMatchSnapshot());

  ['sad', 'tired', 'confused', 'hungry'].forEach((mood) => {
    test(`mood ${mood} is rendered as expected`, () => expect(render({ mood })).toMatchSnapshot());
  });
});

describe('LandingView icon changes when button is pressed', () => {
  const getMood = jest.fn();
  let landingView;
  beforeAll(() => {
    jest.clearAllMocks();
    getMood.mockReturnValue('sad');
    useDataContext.mockReturnValue({ getMood });
    landingView = render({ loading: false });
  });

  test('button is rendered', () => {
    const button = landingView.find(Button);
    expect(button.exists()).toEqual(true);
  });

  test('button click changes mood', () => {
    const button = landingView.find(Button);
    button.simulate('click');
    expect(getMood).toHaveBeenCalled();
  });
});
