import React, { useState, useEffect } from 'react'
import './Screen.scss'

export default({screenLength, value}) => {

    const [valueOverflow, setValueOverflow] = useState(false)
    let chunkedValue = value.toString().slice(0, screenLength)
    
    useEffect(() => {
        setValueOverflow(value.toString().length > screenLength)
    }, [screenLength, value])
    
    return (    
        <div className="screen">
            <div className="content">
                {chunkedValue}{valueOverflow && (
                    <span>E</span>
                )}
            </div>
        </div>
    )
}