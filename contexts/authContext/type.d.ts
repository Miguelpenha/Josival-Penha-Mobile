export interface IAuthContext {
    teacherID: string
    login: (login: string, password: string) => Promise<{ authenticated: boolean }>
}