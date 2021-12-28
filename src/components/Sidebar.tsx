import React, { useCallback } from "react"
import {
  HStack,
  VStack,
  Center,
  Avatar,
  Heading,
  IconButton,
  useColorModeValue,
  Icon,
  Button,
} from "native-base"

import { DrawerContentComponentProps } from "@react-navigation/drawer"
import { Feather } from "@expo/vector-icons"

import { useDispatch, useSelector } from "react-redux"
import { ReducerType } from "../redux/reducers"
import { USER_LOGOUT } from "../redux/actions/UserActions"

const Sidebar = (props: DrawerContentComponentProps) => {
  const { name } = useSelector((state: ReducerType) => state.user)
  const dispatch = useDispatch()

  const { navigation } = props

  const handlePressBackButton = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])

  const updateUser = useCallback(
    () => dispatch({ type: USER_LOGOUT }),
    [dispatch]
  )

  return (
    <>
      <VStack flex={1} space={2} safeArea p={2}>
        <HStack justifyContent="flex-end">
          <IconButton
            onPress={handlePressBackButton}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue("blue.300", "darkBlue.700")}
            _icon={{
              as: Feather,
              name: "chevron-left",
              size: 6,
              color: useColorModeValue("blue.800", "darkBlue.700"),
            }}
          />
        </HStack>
        <Avatar
          size="xl"
          borderRadius={100}
          mb={6}
          borderColor="secondary.500"
          borderWidth={3}
        >
          {name.charAt(0).toUpperCase()}
        </Avatar>
        <Heading mb={4} size="xl">
          {name}
        </Heading>
      </VStack>
      <Center mb={20}>
        <Button
          variant="solid"
          colorScheme="secondary"
          onPress={() => updateUser()}
        >
          SIGN OUT
        </Button>
      </Center>
    </>
  )
}

export default Sidebar
