import React from "react"
import { IconButton, Image } from "native-base"
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/core"
import { DrawerNavigationProp } from "@react-navigation/drawer"
import { ImageBackground } from "react-native"

const Header = () => {
  const navigation = useNavigation<DrawerNavigationProp<{}>>()
  return (
    <ImageBackground
      style={{
        height: 130,
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
      source={require("../assest/logo.png")}
    >
      <IconButton
        onPress={() => navigation.openDrawer()}
        borderRadius={100}
        _icon={{
          as: AntDesign,
          name: "menufold",
          size: 7,
          color: "white",
        }}
      />
    </ImageBackground>
  )
}

export default Header
