import React from 'react'
import './SubmitButton.scss'

const SubmitButton = ({children, ...otherProps}) => (
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
)

export default SubmitButton