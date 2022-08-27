import React from "react"
import { NativeBaseProvider } from "native-base"
import AppNavigator from "./src/navigations"
import { Provider as StoreProvider } from "react-redux"

import { store } from "./src/redux/store"

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
