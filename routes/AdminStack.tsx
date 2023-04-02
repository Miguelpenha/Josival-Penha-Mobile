import { createStackNavigator } from '@react-navigation/stack'
import { INavigation } from '../types'
import { AdminHome, AdminNotify, AdminDocuments, AdminNotifyEmail, AdminSpreadsheets, AdminNotifyWhatsapp, AdminDocumentsDeclaration, AdminNotifyWhatsappReportCard } from '../pages/Admin'
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
            <Screen name="AdminNotify" component={AdminNotify}/>
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