import { NavigationContainer } from "@react-navigation/native"
import AuthStack from "./AuthStack"
import HomeStack from "./HomeStack";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
// import { userLogin, userLogout } from "../redux/actions/UserActions"

import { auth } from "../utlis/Fireabase";

const AppNavigator = () => {
  // const user = auth.currentUser
  const { isLogged } = useSelector(state => state.user)
  console.log(isLogged)
  return (
    <NavigationContainer>
      {isLogged ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
export default AppNavigator