import { Dispatch, SetStateAction } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

async function logout(setValue: Dispatch<SetStateAction<any>>, item: string) {
    setValue(null)

    await AsyncStorage.removeItem(`@reportCard:${item}`)
}

export default logout