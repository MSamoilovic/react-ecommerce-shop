export const googleSigninStart = () => ({
  type: "GOOGLE_SIGNIN_START",
});

export const emailSigninStart = (emailAndPasswordObject) => ({
  type: "EMAIL_SIGNIN_START",
  payload: emailAndPasswordObject,
});

export const signinSuccess = (user) => ({
  type: "SIGNIN_SUCCESS",
  payload: user,
});

export const signinFailure = (error) => ({
  type: "SIGNIN_FAILURE",
  payload: error,
});

export const checkUserSession = () => ({
  type: "CHECK_USER_SESSION",
});
