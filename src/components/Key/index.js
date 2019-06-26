import React from 'react'
import './Key.scss'

export default({ label, type, onClick }) => (
    <button className={"key" + ((type !== undefined) ? " " + type : "")} onClick={onClick}>{label}</button>
)