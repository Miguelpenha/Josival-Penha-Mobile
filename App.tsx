import React, { useEffect } from 'react'
import useUpdateApp from './utils/useUpdateApp'
import * as SplashScreen from 'expo-splash-screen'
import { green } from './utils/colorsLogs'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { IsConnectedProvider } from './contexts/isConnectedContext'
import { AuthProvider } from './contexts/authContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Routes from './routes'
import Toast from 'react-native-toast-message'
import toastConfig from './utils/toastConfig'

SplashScreen.preventAutoHideAsync()

function App() {
  const updateApp = useUpdateApp()

  useEffect(() => {
    SplashScreen.hideAsync().then(async () => {
      console.log(green('>> App Started'))

      await updateApp()
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <IsConnectedProvider>
        <AuthProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Routes/>
            <Toast config={toastConfig} onPress={() => Toast.hide()}/>
          </GestureHandlerRootView>
        </AuthProvider>
      </IsConnectedProvider>
    </ThemeProvider>
  )
}

export default App