import calculate from '../utils/calculate.js'

describe('calculate', () => {
    let num1, num2, operator;

    it ('should throw an error when operator is invalid', () => {
        num1 = 10
        num2 = 20
        operator = "foo"
        expect(() => {calculate(num1, num2, operator)}).toThrowError('Invalid operation');
    })

    it ('should throw an error when nums are not numbers', () => {
        num1 = 10
        num2 = "foo"
        operator = "*"
        expect(() => {calculate(num1, num2, operator)}).toThrowError('Invalid input type');

        num1 = "bar"
        num2 = 20
        operator = "*"
        expect(() => {calculate(num1, num2, operator)}).toThrowError('Invalid input type');
    })

    describe('when operators are valid', () => {
        it ('does addition correctly', () => {
            num1 = 10
            num2 = 20
            operator = "+"
            expect(calculate(num1, num2, operator)).toBe(30);
        })

        it ('does subtraction correctly', () => {
            num1 = 10
            num2 = 20
            operator = "-"
            expect(calculate(num1, num2, operator)).toBe(-10);
        })

        it ('does multiplication correctly', () => {
            num1 = 10
            num2 = 20
            operator = "*"
            expect(calculate(num1, num2, operator)).toBe(200);
        })

        it ('does division correctly', () => {
            num1 = 10
            num2 = 20
            operator = "/"
            expect(calculate(num1, num2, operator)).toBe(0.5);
        })
    })
})