import React from 'react'
import {shallow} from 'enzyme'
import '../setup-env.js'; // Setup Enzyme & Adapter

import Footer from '../../client/components/Footer'


describe('<Footer />', () => {

    test('renders without crashing', () => {
        shallow(<Footer />);
    });
})