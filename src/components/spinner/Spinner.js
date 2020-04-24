import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './Spinner.styles'

const Spinner = (ChildComponent) => ({isLoading, ...otherProps}) => {
    return isLoading? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <ChildComponent {...otherProps} />
    )
}

export default Spinner