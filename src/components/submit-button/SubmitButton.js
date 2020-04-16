import React from 'react'
import './SubmitButton.scss'

const SubmitButton = ({children, isGoogleButton, inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted': ''}  ${isGoogleButton ? 'google-button': ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default SubmitButton