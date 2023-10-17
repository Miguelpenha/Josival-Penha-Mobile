import { useContext } from 'react'
import IsConnectedContext from './Context'

function useIsConnected() {
    return useContext(IsConnectedContext)
}

export default useIsConnected