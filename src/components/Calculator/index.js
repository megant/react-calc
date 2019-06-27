import React from 'react'
import Screen from '../Screen'
import Keypad from '../Keypad'
import calculate from '../../utils/calculate'
import './Calculator.scss'

class Calculator extends React.Component {

    SCREEN_LENGTH = 12

    constructor(props) {
        super(props)
        this.state = {
            lastValue: null,
            currentValue: 0,
            lastOperator: null,
            operatorClicked: false,
            currentValueIsDecimal: false,
            dotPlaced: false,
        }
    }

    storeCurrentValue() {
        this.setState({
            lastValue: this.state.currentValue, 
            operatorClicked: false,
            currentValueIsDecimal: false,
            dotPlaced: false,
        })
    }
    
    addDigit(digit) {
        if (this.SCREEN_LENGTH === this.state.currentValue.toString().length) {
            return
        } 

        let newValue

        if (this.state.operatorClicked) {
            this.storeCurrentValue()
            newValue = digit
        } 
        else {
            if (this.state.currentValueIsDecimal) {
                if (!this.state.dotPlaced) {
                    digit = "." + digit
                    this.setState({dotPlaced: true})
                }
                newValue = this.state.currentValue.toString() + digit
            } 
            else {
                newValue = this.state.currentValue * 10 + digit
            }
        }
        this.setState({currentValue: newValue})
    }

    addDot() {
        if (!this.state.currentValueIsDecimal) {
            this.setState({currentValueIsDecimal: true, dotPlaced: false})
        }
    }

    doOpposite() {
        if (this.state.currentValue !== 0) {
            this.setState({currentValue: -parseFloat(this.state.currentValue)})
        }
    }

    doPercentage() {
        this.setState({currentValue: parseFloat(this.state.currentValue) / 100})
    }

    showResult() {
        if (this.state.lastOperator !== null) {
            const newValue = calculate(parseFloat(this.state.lastValue), parseFloat(this.state.currentValue), this.state.lastOperator)
            this.setState({
                currentValue: newValue
            })
        }
    }

    doOperation(operator) {
        if (this.state.operatorClicked) return

        this.setState({
            lastOperator: operator,
            operatorClicked: true
        })
        this.showResult()
    }

    resetState() {
        this.setState({
            lastValue: null,
            currentValue: 0,
            lastOperator: null,
            operatorClicked: false,
            currentValueIsDecimal: false,
            dotPlaced: false,
        })
    }
    
    render() {
        return (
            <div className="calculator">
                <Screen value={this.state.currentValue} screenLength={this.SCREEN_LENGTH}/>
                <Keypad 
                    digitClickHandler={this.addDigit.bind(this)}
                    operatorClickHandler={this.doOperation.bind(this)}
                    equalClickHandler={this.showResult.bind(this)}
                    dotClickHandler={this.addDot.bind(this)}
                    percentageClickHandler={this.doPercentage.bind(this)}
                    oppositeClickHandler={this.doOpposite.bind(this)}
                    clearClickHandler={this.resetState.bind(this)}
                />
            </div>
        )
    }
}

export default Calculator