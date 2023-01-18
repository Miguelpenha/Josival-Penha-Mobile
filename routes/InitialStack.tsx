import { createStackNavigator } from '@react-navigation/stack'
import { INavigation } from '../types'
import Home from '../pages/Home'
import Sign from '../pages/Sign'
import Login from '../pages/Login'

function InitialStack() {
    const { Navigator, Screen } = createStackNavigator<INavigation>()
    
    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Home" component={Home}/>
            <Screen name="Sign" component={Sign}/>
            <Screen name="Login" component={Login}/>
        </Navigator>
    )
}

export default InitialStack