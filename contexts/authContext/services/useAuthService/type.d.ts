interface IRequestLocal {
    login: string
    password: string
}

interface IRequestGoogle {
    accessToken: string
}

type IRequest = IRequestLocal | IRequestGoogle

interface IResponse {
    id: number
    authenticated: boolean
}

type IType = 'local' | 'google'

export {
    IType,
    IRequest,
    IResponse
}