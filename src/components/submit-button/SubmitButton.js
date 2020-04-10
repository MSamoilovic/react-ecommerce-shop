import React from 'react'
import './SubmitButton.scss'

const SubmitButton = ({children, isGoogleButton, ...otherProps}) => (
    <button className={`${isGoogleButton ? 'google-button': ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default SubmitButton