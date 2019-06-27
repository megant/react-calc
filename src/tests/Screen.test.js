import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Screen from '../components/Screen';

configure({
    adapter: new Adapter
})

describe('<Screen />', () => {

    let wrapper, value, screenLength

    it('should render without given props', () => {
        wrapper = shallow(<Screen />);
        expect(wrapper.exists()).to.be.true;
    })

    it('should display value', () => {
        value = "12345678"
        wrapper = shallow(<Screen value={value} />);
        expect(wrapper.find('.content').text()).to.equal(value);    
    })

    it('should display chunked value', () => {
        value = "123456789123456789"
        screenLength = "12"
        const chunkedValue = value.slice(0, screenLength)

        wrapper = shallow(<Screen value={value} screenLength={screenLength} />);
        expect(wrapper.find('.content').text()).to.equal(chunkedValue);    
    })

    // Enzyme currently does not support shallow rendering of hooks 
/*     it('shows overflow indicator', () => {
        value = 123456789123456789
        wrapper = shallow(<Screen value={value} />);
        expect(wrapper.find('.overflow-indicator')).to.have.lengthOf(1);
    }) */
});