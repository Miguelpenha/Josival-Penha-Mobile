import { createStackNavigator } from '@react-navigation/stack'
import { INavigation } from '../types'
import SigIn from '../pages/SigIn'
import Class from '../pages/Class'

function MainStack() {
    const { Navigator, Screen } = createStackNavigator<INavigation>()
    
    return (
        <Navigator
            initialRouteName="SigIn"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="SigIn" component={SigIn}/>
            <Screen name="Class" component={Class}/>
        </Navigator>
    )
}

export default MainStack