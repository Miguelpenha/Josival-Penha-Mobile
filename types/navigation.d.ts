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
    Sign: {
      type: ITypeLogin
    }
    Login: {
      type: ITypeLogin
    }
    SelectStudent: {
      next: keyof INavigation
    }
    AdminIncome: {
      incomeID: string
    }
    AdminCreateIncome: {
      studentID: string
    }
    AdminNotifyWhatsappSend: {
      studentID: string
    }
    AdminNotifyEmailNoticePayment: {
      studentID: string
    }
    AdminDocumentsDeclarationFrequency: {
      studentID: string
    }
    AdminDocumentsDeclarationFinancial: {
      studentID: string
    }
    AdminDocumentsDeclarationProvisionalTransfer: {
      studentID: string
    }
}

export default INavigation