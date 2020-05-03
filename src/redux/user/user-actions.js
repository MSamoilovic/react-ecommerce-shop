export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})

export const googleSigninStart = () => ({
    type:'GOOGLE_SIGNIN_START'
})

export const googleSigninSuccess = (user) => ({
    type: 'GOOGLE_SIGNIN_SUCCESS',
    payload: user
})

export const googleSiginFailure = (error) => ({
    type: 'GOOGLE_SIGNIN_FAILURE',
    payload: error
})