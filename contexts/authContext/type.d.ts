export interface IAuthContext {
    teacherID: string
    logout: () => Promise<void>
    loginGoogle: (accessToken: string) => Promise<{ authenticated: boolean }>
    loginLocal: (login: string, password: string) => Promise<{ authenticated: boolean }>
}