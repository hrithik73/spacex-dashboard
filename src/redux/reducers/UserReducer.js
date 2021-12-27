import { USER_LOGIN, USER_LOGOUT } from '../actions/UserActions'

const initialState = {
  isLoggedIn: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      const { name = 'anon' } = action.payload
      return {
        isLoggedIn: true,
        name,
      }
    }
    case USER_LOGOUT: {
      return {
        isLoggedIn: false,
      }
    }
    default: {
      return state
    }
  }
}

export default userReducer