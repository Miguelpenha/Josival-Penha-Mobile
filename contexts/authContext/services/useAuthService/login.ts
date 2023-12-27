import { IRequest, IResponse } from './type'
import { Dispatch, SetStateAction } from 'react'
import base from '../../../../services/api/base'
import AsyncStorage from '@react-native-async-storage/async-storage'

async function login(body: IRequest, url: string, setValue: Dispatch<SetStateAction<any>>, item: string) {
    const { data } = await base.post<IResponse>(url, body)
    const { authenticated, id } = data

    if (authenticated) {
        setValue(id)

        await AsyncStorage.setItem(`@josivalPenha:${item}`, String(id))

        return { authenticated: true }
    } else {
        return { authenticated: false }
    }
}

export default login