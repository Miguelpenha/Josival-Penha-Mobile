import { useTheme } from 'styled-components'
import useIsConnected from '../contexts/isConnectedContext'
import useAuth from '../contexts/authContext'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import themeRouter from './theme'
import AdminStack from './AdminStack'
import TeacherStack from './TeacherStack'
import InitialStack from './InitialStack'

function Routes() {
  const theme = useTheme()
  const { isConnected } = useIsConnected()
  const { adminIndex, teacherID } = useAuth()

  return (
    <>
      <StatusBar
        style="dark"
        animated={true}
        backgroundColor={theme.backgroundColor}
      />
      <NavigationContainer theme={themeRouter}>
        {isConnected === false ? (
          <InitialStack initialRoute="NotConnected"/>
        ) : (
          adminIndex ? <AdminStack/> : (
            teacherID ? <TeacherStack/> : <InitialStack/>
          )
        )}
      </NavigationContainer>
    </>
  )
}

export default Routes