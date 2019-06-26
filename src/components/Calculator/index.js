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
            lastValue: 0,
            currentValue: 0,
            lastOperator: null,
            operatorClicked: false,
            dotPlaced: false,
            decimaSeparator: ""
        }
    }
    
    showDigit(digit) {
        if (this.SCREEN_LENGTH > this.state.currentValue.toString().length) {
            const newValue = (this.state.operatorClicked) ? parseInt(digit) : parseFloat(this.state.currentValue + this.state.decimaSeparator + digit);
            this.setState({currentValue: newValue, decimaSeparator: "", operatorClicked: false})
        }
    }

    placeDot() {
        if (!this.state.dotPlaced) {
            this.setState({decimaSeparator: ".", dotPlaced: true})
        }
    }

    doOpposite() {
        if (this.state.currentValue !== 0) {
            this.setState({currentValue: -this.state.currentValue})
        }
    }

    doOperation(operator) {
        if (this.state.lastOperator !== null) {
            const newValue = calculate(this.state.lastValue, this.state.currentValue, this.state.lastOperator)
            this.setState({
                currentValue: newValue,
                lastValue: newValue
            })
        }             
        this.setState({
            lastOperator: (operator === "=") ? this.state.lastOperator : operator,
            operatorClicked: true,
            lastValue: this.state.currentValue
        })
    }

    clearScreen() {
        this.setState({
            lastValue: 0,
            currentValue: 0,
            lastOperator: null,
            dotClicked: false,
            dotPlaced: false,
            digitPrefix: ""
        })
    }
    
    render() {
        return (
            <div className="calculator">
                <Screen value={this.state.currentValue} screenLength={this.SCREEN_LENGTH}/>
                <Keypad 
                    digitClickHandler={this.showDigit.bind(this)}
                    operatorClickHandler={this.doOperation.bind(this)}
                    dotClickHandler={this.placeDot.bind(this)}
                    oppositeClickHandler={this.doOpposite.bind(this)}
                    clearClickHandler={this.clearScreen.bind(this)}
                />
            </div>
        )
    }
}

export default Calculator