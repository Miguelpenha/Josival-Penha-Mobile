import { createStackNavigator } from '@react-navigation/stack'
import { INavigation } from '../types'
import Admin from '../pages/Admin'

function AdminStack() {
    const { Navigator, Screen } = createStackNavigator<INavigation>()
    
    return (
        <Navigator
            initialRouteName="Admin"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Admin" component={Admin}/>
        </Navigator>
    )
}

export default AdminStack