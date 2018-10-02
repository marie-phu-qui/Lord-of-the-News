import React from 'react'
import {shallow, mount} from 'enzyme'
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
import '../setup-env.js'; // Setup Enzyme & Adapter

import {TranslateButtons} from '../../client/components/TranslateButtons'


test('<TranslateButtons /> renders without crashing', () => {
    shallow(<TranslateButtons />);
  });

  describe('<TranslateButtons />', () => {
    describe('onClick()', () => {
      test('successfully calls the changeLanguage handler', () => {
        const mockOnClick = jest.fn();
        const wrapper = shallow(
          <TranslateButtons onChange={mockOnClick} />
        );
        wrapper.find('button').at(0).simulate('change');

        expect(mockOnClick.mock.calls.length).toEqual(1);

      });
    });
  });