import React from "react"
import { AppRegistry } from "react-native"
import { Provider } from "react-redux"
import { name as appName } from "./app.json"
import { persistor, store } from "./store"
import { App } from "./App"
import { PersistGate } from "redux-persist/integration/react"

const RNRedux = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux)
