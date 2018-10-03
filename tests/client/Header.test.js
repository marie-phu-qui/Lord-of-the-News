import React from 'react'
import {shallow, mount} from 'enzyme'
import '../setup-env.js'; // Setup Enzyme & Adapter

import {Header} from '../../client/components/Header'


describe('<Header />', () => {

    test('renders without crashing', () => {
        shallow(<Header />);
    });

    test('should render intial state, handlestate changes', () => {
        const wrapper = shallow(<Header/>);
        expect('showAbout' in wrapper.state()).toEqual(true); 
        expect(wrapper.state('showAbout')).toEqual(false)
      });

    describe('onClick()', () => {

        test('successfully calls the function', () => {
            const spy = jest.spyOn(Header.prototype, 'showAbout'); 
            const wrapper = shallow(<Header />);
            wrapper.find('#about-project').simulate('click');
            expect(spy).toBeCalled();
        })

        test('handles function state change', () => {
            const wrapper = shallow(<Header />);
            wrapper.find('#about-project').simulate('click');

            const showAbout = wrapper.state().showAbout;
            expect(showAbout).toEqual(true);

            const showTeam = wrapper.state().showTeam;
            expect(showTeam).toEqual(false);

            const showContact = wrapper.state().showContact;
            expect(showContact).toEqual(false);

            const showExt = wrapper.state().showExt;
            expect(showExt).toEqual(false);
        });
    });
})

    

