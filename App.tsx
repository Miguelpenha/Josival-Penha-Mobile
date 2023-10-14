import React, { useEffect } from 'react'
import useUpdateApp from './utils/useUpdateApp'
import * as SplashScreen from 'expo-splash-screen'
import { green } from './utils/colorsLogs'
import * as Updates from 'expo-updates'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { AuthProvider } from './contexts/authContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Routes from './routes'
import Toast from 'react-native-toast-message'
import toastConfig from './utils/toastConfig'

SplashScreen.preventAutoHideAsync()

function App() {
  const updateApp = useUpdateApp()

  useEffect(() => {
    updateApp().then(update => {
      SplashScreen.hideAsync().then(async () => {
        console.log(green('>> App Started'))

        if (update) {
          await Updates.reloadAsync()
        }
      })
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Routes/>
          <Toast config={toastConfig} onPress={() => Toast.hide()}/>
        </GestureHandlerRootView>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App