import { createStackNavigator } from '@react-navigation/stack'
import { INavigation } from '../types'
import Settings from '../pages/Settings'
import { AdminHome, AdminIncome, AdminNotify, AdminIncomes, AdminStudent, AdminDocuments, AdminNotifyEmail, AdminCreateIncome, AdminSpreadsheets, AdminNotifyWhatsapp, AdminNotifyEmailNotice, AdminNotifyWhatsappSend, AdminDocumentsDeclarations, AdminDocumentsDeclarationFrequency, AdminDocumentsDeclarationFinancial } from '../pages/Admin'
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
            <Screen name="AdminIncome" component={AdminIncome}/>
            <Screen name="AdminNotify" component={AdminNotify}/>
            <Screen name="AdminIncomes" component={AdminIncomes}/>
            <Screen name="AdminStudent" component={AdminStudent}/>
            <Screen name="SelectStudent" component={SelectStudent}/>
            <Screen name="AdminDocuments" component={AdminDocuments}/>
            <Screen name="AdminNotifyEmail" component={AdminNotifyEmail}/>
            <Screen name="AdminCreateIncome" component={AdminCreateIncome}/>
            <Screen name="AdminSpreadsheets" component={AdminSpreadsheets}/>
            <Screen name="AdminNotifyWhatsapp" component={AdminNotifyWhatsapp}/>
            <Screen name="AdminNotifyEmailNotice" component={AdminNotifyEmailNotice}/>
            <Screen name="AdminNotifyWhatsappSend" component={AdminNotifyWhatsappSend}/>
            <Screen name="AdminDocumentsDeclarations" component={AdminDocumentsDeclarations}/>
            <Screen name="AdminDocumentsDeclarationFrequency" component={AdminDocumentsDeclarationFrequency}/>
            <Screen name="AdminDocumentsDeclarationFinancial" component={AdminDocumentsDeclarationFinancial}/>
        </Navigator>
    )
}

export default AdminStack