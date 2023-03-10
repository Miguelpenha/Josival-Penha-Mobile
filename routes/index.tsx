import { useTheme } from 'styled-components'
import useAuth from '../contexts/authContext'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import themeRouter from './theme'
import AdminStack from './AdminStack'
import TeacherStack from './TeacherStack'
import InitialStack from './InitialStack'

function Routes() {
  const theme = useTheme()
  const { isAdmin, teacherID } = useAuth()

  return (
    <>
      <StatusBar
        style="light"
        animated={true}
        backgroundColor={theme.backgroundColor}
      />
      <NavigationContainer theme={themeRouter}>
        {isAdmin ? <AdminStack/> : (
          teacherID ? <TeacherStack/> : <InitialStack/>
        )}
      </NavigationContainer>
    </>
  )
}

export default Routes