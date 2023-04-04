import { createStackNavigator } from '@react-navigation/stack'
import { INavigation } from '../types'
import Settings from '../pages/Settings'
import { AdminHome, AdminNotify, AdminStudent, AdminDocuments, AdminNotifyEmail, AdminSpreadsheets, AdminNotifyWhatsapp, AdminDocumentsDeclaration, AdminNotifyWhatsappReportCard } from '../pages/Admin'
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
            <Screen name="Settings" component={Settings}/>
            <Screen name="AdminHome" component={AdminHome}/>
            <Screen name="AdminNotify" component={AdminNotify}/>
            <Screen name="AdminStudent" component={AdminStudent}/>
            <Screen name="SelectStudent" component={SelectStudent}/>
            <Screen name="AdminDocuments" component={AdminDocuments}/>
            <Screen name="AdminNotifyEmail" component={AdminNotifyEmail}/>
            <Screen name="AdminSpreadsheets" component={AdminSpreadsheets}/>
            <Screen name="AdminNotifyWhatsapp" component={AdminNotifyWhatsapp}/>
            <Screen name="AdminDocumentsDeclaration" component={AdminDocumentsDeclaration}/>
            <Screen name="AdminNotifyWhatsappReportCard" component={AdminNotifyWhatsappReportCard}/>
        </Navigator>
    )
}

export default AdminStack