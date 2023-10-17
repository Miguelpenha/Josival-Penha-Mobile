import { FC, useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import IIsConnectedContext from './type'
import IsConnectedContext from './Context'

interface Iprops {
    children: any
}

const IsConnectedProvider: FC<Iprops> = ({ children }) => {
    const [isConnected, setIsConnected] = useState<boolean>()

    useEffect(() => {
        NetInfo.addEventListener(state => setIsConnected(state.isConnected))
    }, [])

    const value: IIsConnectedContext = {
        isConnected
    }
    
    return (
        <IsConnectedContext.Provider value={value}>
           {children}
        </IsConnectedContext.Provider>
    )
}

export default IsConnectedProvider