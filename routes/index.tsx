import { useTheme } from 'styled-components'
import useAuth from '../contexts/authContext'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import themeRouter from './theme'
import InitialStack from './InitialStack'
import MainStack from './MainStack'

function Routes() {
  const theme = useTheme()
  const { teacherID } = useAuth()

  return (
    <>
      <StatusBar
        style="light"
        animated={true}
        backgroundColor={theme.backgroundColor}
      />
      <NavigationContainer theme={themeRouter}>
        {!teacherID ? <InitialStack/> : <MainStack/>}
      </NavigationContainer>
    </>
  )
}

export default Routes