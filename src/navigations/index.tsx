import { NavigationContainer } from "@react-navigation/native"
import AuthStack from "./AuthStack"

import HomeNavigator from "./HomeNavigator"

import { useAppSelector } from "../redux/store"

const AppNavigator = () => {
  const { isLoggedIn } = useAppSelector((state) => state.user)

  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeNavigator /> : <AuthStack />}
    </NavigationContainer>
  )
}
export default AppNavigator
