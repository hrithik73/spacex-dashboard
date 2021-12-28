import { NavigationContainer } from "@react-navigation/native"
import AuthStack from "./AuthStack"
import { ReducerType } from "../redux/reducers"

import HomeNavigator from "./HomeNavigator"

import { useSelector } from "react-redux"

const AppNavigator = () => {
  const state = useSelector((state: ReducerType) => state.user)

  console.log(state.isLoggedIn)

  return (
    <NavigationContainer>
      {state.isLoggedIn ? <HomeNavigator /> : <AuthStack />}
      {/* <HomeNavigator /> */}
    </NavigationContainer>
  )
}
export default AppNavigator
