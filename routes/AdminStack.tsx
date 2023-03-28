import { createStackNavigator } from '@react-navigation/stack'
import { INavigation } from '../types'
import { AdminHome, AdminDocuments, AdminSpreadsheets, AdminDocumentsDeclaration } from '../pages/Admin'
import SelectStudent from '../pages/SelectStudent'

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
            <Screen name="SelectStudent" component={SelectStudent}/>
            <Screen name="AdminDocuments" component={AdminDocuments}/>
            <Screen name="AdminSpreadsheets" component={AdminSpreadsheets}/>
            <Screen name="AdminDocumentsDeclaration" component={AdminDocumentsDeclaration}/>
        </Navigator>
    )
}

export default AdminStack