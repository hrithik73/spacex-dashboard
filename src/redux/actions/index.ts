import { USER_LOGIN, USER_LOGOUT } from "./UserActions"

export const userLogin = ({ name }) => ({
  type: USER_LOGIN,
  payload: {
    name,
  },
})

export const userLogout = () => ({
  type: USER_LOGOUT,
  payload: {},
})
