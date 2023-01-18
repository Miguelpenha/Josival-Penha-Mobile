import { createStackNavigator } from '@react-navigation/stack'
import { INavigation } from '../types'
import Teacher from '../pages/Teacher'

function TeacherStack() {
    const { Navigator, Screen } = createStackNavigator<INavigation>()
    
    return (
        <Navigator
            initialRouteName="Teacher"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Teacher" component={Teacher}/>
        </Navigator>
    )
}

export default TeacherStack