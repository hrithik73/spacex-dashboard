import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"

const Home = createStackNavigator()

const HomeStack = () => {
  return (
    <Home.Navigator>
      <Home.Screen name="HomeScreen" component={HomeScreen} />
    </Home.Navigator>
  )
}

export default HomeStack
