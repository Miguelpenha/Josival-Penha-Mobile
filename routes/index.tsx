import { useTheme } from 'styled-components'
import useAuth from '../contexts/authContext'
import useUpdateApp from '../utils/useUpdateApp'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import themeRouter from './theme'
import AdminStack from './AdminStack'
import TeacherStack from './TeacherStack'
import InitialStack from './InitialStack'

function Routes() {
  const theme = useTheme()
  const { adminIndex, teacherID } = useAuth()
  
  useUpdateApp()

  return (
    <>
      <StatusBar
        style="dark"
        animated={true}
        backgroundColor={theme.backgroundColor}
      />
      <NavigationContainer theme={themeRouter}>
        {adminIndex ? <AdminStack/> : (
          teacherID ? <TeacherStack/> : <InitialStack/>
        )}
      </NavigationContainer>
    </>
  )
}

export default Routes