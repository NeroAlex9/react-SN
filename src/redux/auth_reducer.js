let AUTH_USER = "AUTH_USER";


let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFatching:false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
};

export let authUser = (id, email, login) => ({ type: AUTH_USER, data:{id, email, login} });

export default authReducer;
