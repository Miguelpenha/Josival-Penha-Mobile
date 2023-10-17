import { INavigation } from '../types'
import { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'
import Sign from '../pages/Sign'
import Login from '../pages/Login'
import NotConnected from '../pages/NotConnected'

interface IProps {
    initialRoute?: keyof INavigation
}

const InitialStack: FC<IProps> = ({ initialRoute }) => {
    const { Navigator, Screen } = createStackNavigator<INavigation>()

    if (initialRoute) {
        return (
            <Navigator
                initialRouteName={initialRoute || 'Home'}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Screen name="Home" component={Home}/>
                <Screen name="Sign" component={Sign}/>
                <Screen name="Login" component={Login}/>
                <Screen name="NotConnected" component={NotConnected}/>
            </Navigator>
        )
    } else {
        return null
    }
}

export default InitialStack