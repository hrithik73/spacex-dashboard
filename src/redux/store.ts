import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { createStore, applyMiddleware, AnyAction } from "redux"

import thunk, { ThunkDispatch } from "redux-thunk"

import reducers from "./reducers"

export const store = createStore(reducers, {}, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>

export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>

export const useAppDispatch: () => TypedDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
