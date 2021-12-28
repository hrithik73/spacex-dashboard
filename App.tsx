import React from "react"
import { PersistGate } from "redux-persist/integration/react"

import { LogBox } from "react-native"
import { NativeBaseProvider, Box } from "native-base"
import AppNavigator from "./src/navigations"

import { Provider as StoreProvider } from "react-redux"
import { store } from "./src/redux/store"

// Ignoring the Logs of AsyncStorage getting from "Firebase" because using older version
LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core"])

const App = () => {
  return (
    <StoreProvider store={store}>
      <NativeBaseProvider>
        <AppNavigator />
      </NativeBaseProvider>
    </StoreProvider>
  )
}

export default App
