import React from 'react'
import Key from '../Key'
import './Keypad.scss'

export default({
        digitClickHandler, 
        dotClickHandler, 
        operatorClickHandler,
        oppositeClickHandler,
        clearClickHandler   
    }) => {

    return(
        <div className="keypad">
            <section className="input-keys">
                <section className="functions">
                    <Key label="AC" onClick={() => clearClickHandler()} />
                    <Key label="±" onClick={() => oppositeClickHandler()} />
                    <Key label="%" onClick={() => operatorClickHandler("%")} />
                </section>
                <section className="digits">
                    <Key type="key-0" label="0" onClick={() => digitClickHandler(0)} />
                    <Key type="dot" label="." onClick={() => dotClickHandler()} />
                    <Key label="1" onClick={() => digitClickHandler(1)} />
                    <Key label="2" onClick={() => digitClickHandler(2)} />
                    <Key label="3" onClick={() => digitClickHandler(3)} />
                    <Key label="4" onClick={() => digitClickHandler(4)} />
                    <Key label="5" onClick={() => digitClickHandler(5)} />
                    <Key label="6" onClick={() => digitClickHandler(6)} />
                    <Key label="7" onClick={() => digitClickHandler(7)} />
                    <Key label="8" onClick={() => digitClickHandler(8)} />
                    <Key label="9" onClick={() => digitClickHandler(9)} />
                </section>
            </section>
            <section className="operators">
                <Key label="+" onClick={() => operatorClickHandler("+")} />
                <Key label="-" onClick={() => operatorClickHandler("-")} />
                <Key type="multiply" label="x" onClick={() => operatorClickHandler("*")} />
                <Key label="÷" onClick={() => operatorClickHandler("/")} />
                <Key label="=" onClick={() => operatorClickHandler("=")} />
            </section>
        </div>
    )
}