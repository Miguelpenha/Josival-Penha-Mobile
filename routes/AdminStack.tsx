import { createStackNavigator } from '@react-navigation/stack'
import { INavigation } from '../types'
import { AdminHome, AdminSpreadsheets } from '../pages/Admin'

function AdminStack() {
    const { Navigator, Screen } = createStackNavigator<INavigation>()
    
    return (
        <Navigator
            initialRouteName="AdminHome"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="AdminHome" component={AdminHome}/>
            <Screen name="AdminSpreadsheets" component={AdminSpreadsheets}/>
        </Navigator>
    )
}

export default AdminStack