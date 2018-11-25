import React, {Component} from 'react'

import Enzyme, {  shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Radio from './index'

Enzyme.configure( { adapter: new Adapter() });

describe('Radio', () => {
    it('Should return className', () => {
        const wrapper = shallow(<Radio />)
        const text = wrapper.find('div form')
        expect(text.text()).toBe('Radio Form')
    })
})

