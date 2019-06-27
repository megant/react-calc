import React from 'react';
import calculate from '../utils/calculate.js'
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Calculator from '../components/Calculator';

configure({
    adapter: new Adapter
})

let wrapper, 
    instance

describe('functions', () => {

    it('should reset state', () => {
        wrapper = shallow(<Calculator />)
        instance = wrapper.instance()
        instance.setState({currentValue: 100})
        instance.resetState()
        expect(instance.state.currentValue).to.be.equal(0)
    })

    it('should convert percentage to decimal', () => {
        wrapper = shallow(<Calculator />)
        instance = wrapper.instance()
        instance.setState({currentValue: 100})
        instance.doPercentage()
        expect(instance.state.currentValue).to.be.equal(1)
    })
    
    it('should opposite the current value', () => {
        wrapper = shallow(<Calculator />)
        instance = wrapper.instance()
        instance.setState({currentValue: 100})
        instance.doOpposite()
        expect(instance.state.currentValue).to.be.equal(-100)
    })
})

describe('calculate', () => {
    let num1, num2, operator;

    it ('should throw an error when operator is invalid', () => {
        num1 = 10
        num2 = 20
        operator = "foo"
        expect(() => {calculate(num1, num2, operator)}).to.throw('Invalid operation');
    })

    it ('should throw an error when nums are not numbers', () => {
        num1 = 10
        num2 = "foo"
        operator = "*"
        expect(() => {calculate(num1, num2, operator)}).to.throw('Invalid input type');

        num1 = "bar"
        num2 = 20
        operator = "*"
        expect(() => {calculate(num1, num2, operator)}).to.throw('Invalid input type');
    })

    describe('when operators are valid', () => {
        it ('should do addition correctly', () => {
            num1 = 10
            num2 = 20
            operator = "+"
            expect(calculate(num1, num2, operator)).to.be.equal(30);
        })

        it ('should do subtraction correctly', () => {
            num1 = 10
            num2 = 20
            operator = "-"
            expect(calculate(num1, num2, operator)).to.be.equal(-10);
        })

        it ('should do multiplication correctly', () => {
            num1 = 0.2
            num2 = 0.3
            operator = "*"
            expect(calculate(num1, num2, operator)).to.be.equal(0.06);
        })

        it ('should do division correctly', () => {
            num1 = 0.03
            num2 = 0.04
            operator = "/"
            expect(calculate(num1, num2, operator)).to.be.equal(0.75);
        })
    })
})