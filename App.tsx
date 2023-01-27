import React, { useState, useEffect } from 'react'
import updateApp from './utils/updateApp'
import AppLoading from 'expo-app-loading'
import { green } from './utils/colorsLogs'
import { AuthProvider } from './contexts/authContext'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Routes from './routes'
import Toast from 'react-native-toast-message'
import toastConfig from './utils/toastConfig'

function App() {
  const [isReady, setReady] = useState(false)

  useEffect(() => {
    updateApp().then()

    setReady(true)
  }, [])

  if (!isReady) {
    return <AppLoading/>
  } else {
    console.log(green('>> App Started'))

    return (
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GestureHandlerRootView style={{flex: 1}}>
            <Routes/>
            <Toast config={toastConfig} onPress={() => Toast.hide()}/>
          </GestureHandlerRootView>
        </AuthProvider>
      </ThemeProvider>
    )
  }
}

export default App