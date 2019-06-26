export default (num1, num2, operator) => {
    const validOperators = ["+", "-", "*", "/"]

    if (typeof num1 !== 'number' || 
        typeof num2 !== 'number')
        throw new Error("Invalid input type")

    if (validOperators.indexOf(operator) < 0) 
        throw new Error("Invalid operation")
    
    return eval(num1 + operator + num2)
}