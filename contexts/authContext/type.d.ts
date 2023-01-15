export interface IAuthContext {
    teacherID: string
    logout: () => Promise<void>
    login: (login: string, password: string) => Promise<{ authenticated: boolean }>
}