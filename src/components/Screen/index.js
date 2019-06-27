import React, { useState, useEffect } from 'react'
import './Screen.scss'

const Screen = ({screenLength = 12, value = 0}) => {

    const [valueOverflow, setValueOverflow] = useState(false)
    let chunkedValue = value.toString().slice(0, screenLength)
    
    useEffect(() => {
        setValueOverflow(value.toString().length > screenLength)
    }, [screenLength, value])
    
    return (    
        <div className="screen">
            <div className="content">
                {chunkedValue}{valueOverflow && (
                    <span className="overflow-indicator">E</span>
                )}
            </div>
        </div>
    )
}
export default Screen