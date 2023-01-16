import { createStackNavigator } from '@react-navigation/stack'
import { INavigation } from '../types'
import Class from '../pages/Class'

function MainStack() {
    const { Navigator, Screen } = createStackNavigator<INavigation>()
    
    return (
        <Navigator
            initialRouteName="Class"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Class" component={Class}/>
        </Navigator>
    )
}

export default MainStack