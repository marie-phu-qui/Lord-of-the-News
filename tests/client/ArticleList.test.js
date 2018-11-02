import React from 'react'
import {shallow} from 'enzyme'
import '../setup-env.js'; // Setup Enzyme & Adapter

import {ArticleList} from './../../client/components/ArticleList'

describe('<ArticleList />', () => {
    test('renders without crashing', () => {
        shallow(<ArticleList />);
    });
})