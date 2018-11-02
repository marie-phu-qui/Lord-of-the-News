import React from 'react'
import {shallow} from 'enzyme'
import '../setup-env.js'; // Setup Enzyme & Adapter

import Article from '../../client/components/Article'


describe('<Article />', () => {

    test('renders without crashing', () => {
        shallow(<Article />);
    });
})