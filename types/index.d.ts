export interface ITheme {
  color: string
  primary: string
  secondary: string
  secondaryColor: string
  backgroundColor: string
  backgroundColorSecondary: string
}

export type ITypeLogin = 'admin' | 'teacher' | false

export type INavigation = {
  Home: undefined
  Settings: undefined
  AdminHome: undefined
  TeacherHome: undefined
  AdminNotify: undefined
  AdminStudent: undefined
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
}