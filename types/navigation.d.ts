type INavigation = {
    Home: undefined
    Settings: undefined
    AdminHome: undefined
    TeacherHome: undefined
    AdminNotify: undefined
    NotConnected: undefined
    AdminStudent: undefined
    AdminDocuments: undefined
    AdminNotifyEmail: undefined
    AdminSpreadsheets: undefined
    AdminNotifyWhatsapp: undefined
    AdminNotifyEmailNotice: undefined
    AdminDocumentsDeclarations: undefined
    AdminNotifyWhatsappSend: {
      studentID: string
    }
    Sign: {
      type: ITypeLogin
    }
    Login: {
      type: ITypeLogin
    }
    SelectStudent: {
      next: keyof INavigation
    }
    AdminDocumentsDeclarationFrequency: {
      studentID: string
    }
    AdminDocumentsDeclarationFinancial: {
      studentID: string
    }
}

export default INavigation