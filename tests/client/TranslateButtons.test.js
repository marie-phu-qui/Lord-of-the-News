import React from 'react'
import {shallow} from 'enzyme'
import '../setup-env.js'; // Setup Enzyme & Adapter

import {TranslateButtons} from '../../client/components/TranslateButtons'


test('<TranslateButtons /> renders without crashing', () => {
    shallow(<TranslateButtons />);
  });

  //Calling for state to change to Gollumify/ Nazgulify
  describe('<TranslateButtons />', () => {
    describe('onClick()', () => {
      test('successfully calls the changeLanguage handler for gollum', () => {
        const mockChange = jest.fn();
        const wrapper = shallow(<TranslateButtons changeLanguage={mockChange}/>);
        wrapper.find('button').at(1).simulate('click');
        expect(mockChange.mock.calls.length).toEqual(1);
      });
      test('successfully calls the changeLanguage handler for Nazgul', () => {
        const mockChange = jest.fn();
        const wrapper = shallow(<TranslateButtons changeLanguage={mockChange}/>);
        wrapper.find('button').at(2).simulate('click');
        expect(mockChange.mock.calls.length).toEqual(1);
      });
    });
  });
