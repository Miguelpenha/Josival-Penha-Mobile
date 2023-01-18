export interface IAuthContext {
    isAdmin: boolean
    teacherID: string
    admin: {
        logout: () => Promise<void>
        loginGoogle: (accessToken: string) => Promise<{ authenticated: boolean }>
        loginLocal: (login: string, password: string) => Promise<{ authenticated: boolean }>
    }
    teacher: {
        logout: () => Promise<void>
        loginGoogle: (accessToken: string) => Promise<{ authenticated: boolean }>
        loginLocal: (login: string, password: string) => Promise<{ authenticated: boolean }>
    }
}