export interface ITheme {
  color: string
  primary: string
  secondary: string
  secondaryColor: string
  backgroundColor: string
  backgroundColorSecondary: string
}

export type ITypeLogin = 'admin' | 'teacher'

export type INavigation = {
  Home: undefined
  AdminHome: undefined
  TeacherHome: undefined
  AdminNotify: undefined
  AdminDocuments: undefined
  AdminNotifyEmail: undefined
  AdminSpreadsheets: undefined
  AdminNotifyWhatsapp: undefined
  Sign: {
    type: ITypeLogin
  }
  Login: {
    type: ITypeLogin
  }
  SelectStudent: {
    next: keyof INavigation
  }
  AdminDocumentsDeclaration: {
    studentID: string
  }
  AdminNotifyWhatsappReportCard: {
    studentID: string
  }
}

export interface ITeacher {
  id: string
  nome: string
}