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
  AdminDocuments: undefined
  AdminSpreadsheets: undefined
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

export interface ITeacher {
  id: string
  nome: string
}