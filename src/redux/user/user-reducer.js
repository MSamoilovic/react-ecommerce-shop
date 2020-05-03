const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "GOOGLE_SIGNIN_SUCCESS":
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case "GOOGLE_SIGNIN_FAILURE":
      return {
        ...state,
        error: action.payload
      }  
    default:
      return state;
  }
};

export default userReducer;
