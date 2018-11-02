import React from 'react'
import {shallow} from 'enzyme'
import '../setup-env.js'; // Setup Enzyme & Adapter

import MachineLearning from '../../client/components/MachineLearning'


describe('<MachineLearning />', () => {

    test('renders without crashing', () => {
        shallow(<MachineLearning />);
    });
})