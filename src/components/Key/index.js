import React from 'react'
import './Key.scss'

const Key = ({ label, type, onClick }) => (
    <button className={"key" + ((type !== undefined) ? " " + type : "")} onClick={onClick}>{label}</button>
)

export default Key