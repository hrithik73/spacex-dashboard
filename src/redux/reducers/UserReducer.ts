import { USER_LOGIN, USER_LOGOUT } from "../actions/UserActions"

const initialState = {
  isLoggedIn: false,
  name: "",
}

const userReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case USER_LOGIN: {
      const name = action.payload
      // console.log("userReducer: USER_LOGIN: name: ", name)
      return {
        isLoggedIn: true,
        name: name,
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
