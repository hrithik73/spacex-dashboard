import { createStore, applyMiddleware } from "redux";
// For asynchronus calls
import thunk from "redux-thunk"

import reducers from "./reducers"

export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
)