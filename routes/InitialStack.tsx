import { createStackNavigator } from '@react-navigation/stack'
import { INavigation } from '../types'
import SigIn from '../pages/SigIn'
import Login from '../pages/Login'

function InitialStack() {
    const { Navigator, Screen } = createStackNavigator<INavigation>()
    
    return (
        <Navigator
            initialRouteName="SigIn"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="SigIn" component={SigIn}/>
            <Screen name="Login" component={Login}/>
        </Navigator>
    )
}

export default InitialStack