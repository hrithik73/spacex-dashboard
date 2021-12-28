import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"

import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import HomeScreen from "../screens/HomeScreen"

const Home = createStackNavigator()
const Drawer = createDrawerNavigator()

const HomeStack = () => {
  return (
    <Home.Navigator screenOptions={{ headerShown: false }}>
      <Home.Screen name="Home" component={HomeScreen} />
    </Home.Navigator>
  )
}

const HomeNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          header: () => <Header />,
        }}
      />
    </Drawer.Navigator>
  )
}

export default HomeNavigator
