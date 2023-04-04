import { Dispatch, SetStateAction } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

function useLoad(setAdminIndex: Dispatch<SetStateAction<number | null>>, setTeacherID: Dispatch<SetStateAction<string | null>>) {
    async function load() {
        const adminIndex = await AsyncStorage.getItem('@reportCard:adminIndex')
        const teacherID = await AsyncStorage.getItem('@reportCard:teacherID')

        if (teacherID) {
            setTeacherID(teacherID)
        } else if (adminIndex) {
            setAdminIndex(Number(adminIndex))
        }
    }

    return load
}

export default useLoad