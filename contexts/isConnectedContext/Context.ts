import { createContext } from 'react'
import IAuthContext from './type'

const IsConnectedContext = createContext<IAuthContext>({} as IAuthContext)

export default IsConnectedContext