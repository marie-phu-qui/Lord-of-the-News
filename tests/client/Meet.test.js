import React from 'react'
import {shallow} from 'enzyme'
import '../setup-env.js'; // Setup Enzyme & Adapter

import Meet from '../../client/components/Meet'


describe('<Meet />', () => {

    test('renders without crashing', () => {
        shallow(<Meet />);
    });
})