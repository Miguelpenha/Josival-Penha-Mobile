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
  AdminSpreadsheets: undefined
  Sign: {
    type: ITypeLogin
  }
  Login: {
    type: ITypeLogin
  }
}

export interface ITeacher {
  id: string
  nome: string
}