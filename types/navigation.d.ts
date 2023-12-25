type INavigation = {
    Home: undefined
    Settings: undefined
    AdminHome: undefined
    TeacherHome: undefined
    AdminNotify: undefined
    NotConnected: undefined
    AdminStudent: undefined
    AdminIncomes: undefined
    AdminDocuments: undefined
    AdminNotifyEmail: undefined
    AdminSpreadsheets: undefined
    AdminNotifyWhatsapp: undefined
    AdminDocumentsDeclarations: undefined
    AdminNotifyEmailNoticePayment: undefined
    AdminIncome: {
      incomeID: string
    }
    AdminCreateIncome: {
      studentID: string
    }
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