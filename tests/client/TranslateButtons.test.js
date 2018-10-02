import React from 'react'
import {shallow} from 'enzyme'
import '../setup-env.js'; // Setup Enzyme & Adapter

import {TranslateButtons} from '../../client/components/TranslateButtons'


test('<TranslateButtons /> renders without crashing', () => {
    shallow(<TranslateButtons />);
  });

  describe('<TranslateButtons />', () => {
    describe('onClick()', () => {
      test('successfully calls the changeLanguage handler', () => {
        const mockChange = jest.fn();
        const wrapper = shallow(<TranslateButtons changeLanguage={mockChange}/>);
        wrapper.find('button').at(0).simulate('click');
        expect(mockChange.mock.calls.length).toEqual(1);
      });
    });
  });
