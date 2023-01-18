import { createStackNavigator } from '@react-navigation/stack'
import { INavigation } from '../types'
import TeacherHome from '../pages/Teacher'

function TeacherStack() {
    const { Navigator, Screen } = createStackNavigator<INavigation>()
    
    return (
        <Navigator
            initialRouteName="TeacherHome"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="TeacherHome" component={TeacherHome}/>
        </Navigator>
    )
}

export default TeacherStack