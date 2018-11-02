import React from 'react'
import {shallow} from 'enzyme'
import '../setup-env.js'; // Setup Enzyme & Adapter

import ChromeExt from '../../client/components/ChromeExt'


describe('<ChromeExt />', () => {

    test('renders without crashing', () => {
        shallow(<ChromeExt />);
    });
})