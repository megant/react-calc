export function countDecimals(number) {

    if (typeof number !== 'number') throw new Error("Invalid input type")

    if (Math.floor(number) === number) return 0
    return number.toString().split(".")[1].length || 0
}

export function multiply(num1, num2) {
    const decimalLength = Math.max(countDecimals(num1), countDecimals(num2))
    
    if (decimalLength > 0) {
        const multiplier = Math.pow(10, decimalLength);
        return (num1 * multiplier * num2 * multiplier) / Math.pow(multiplier, 2)
    } else {
        return num1 * num2
    }
}

export function divide(num1, num2) {
    const decimalLength = Math.max(countDecimals(num1), countDecimals(num2))
    
    if (decimalLength > 0) {
        const multiplier = Math.pow(10, decimalLength);
        return (num1 * multiplier) / (num2 * multiplier)
    } else {
        return num1 / num2
    }

}

export default (num1, num2, operator) => {
    const validOperators = ["+", "-", "*", "/"]

    if (typeof num1 !== 'number' || 
        typeof num2 !== 'number')
        throw new Error("Invalid input type")

    if (validOperators.indexOf(operator) < 0) 
        throw new Error("Invalid operation")

    let result

    switch (operator) {
        case "*":            
             result = multiply(num1, num2)
             break
        case "/":
            result = divide(num1, num2)
            break
        case "+":
            result = num1 + num2
            break
        case "-":
            result = num1 - num2
            break
    }
    
    return result
}