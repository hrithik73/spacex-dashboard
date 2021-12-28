import { combineReducers } from "redux"
import UserReducer from "./UserReducer"

const reducers = combineReducers({
  user: UserReducer,
})
export default reducers

export type ReducerType = ReturnType<typeof reducers>
