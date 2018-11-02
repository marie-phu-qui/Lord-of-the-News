import React from 'react'
import {shallow} from 'enzyme'
import '../setup-env.js'; // Setup Enzyme & Adapter

import About from './../../client/components/About'


describe('<About />', () => {
    test('renders without crashing', () => {
        shallow(<About />);
    });
})