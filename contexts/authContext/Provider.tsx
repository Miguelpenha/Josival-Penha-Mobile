import { FC, useState, useEffect } from 'react'
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TypesContext from './Context'

interface Iprops {
    children: any
}

const AuthProvider: FC<Iprops> = ({ children }) => {
    const [teacherID, setTeacherID] = useState<string>(null)
    
    async function login(login: string, password: string) {
        const { authenticated, teacherID }: { authenticated: boolean, teacherID: string } = (await api.post('/teachers/login', {
            login,
            password
        })).data

        if (authenticated) {
            setTeacherID(teacherID)

            await AsyncStorage.setItem('@reportCard:teacherID', teacherID)

            return { authenticated: true }
        } else {
            return { authenticated: false }
        }
    }

    async function logout() {
        setTeacherID(null)

        await AsyncStorage.removeItem('@reportCard:teacherID')
    }

    useEffect(() => {
        async function load() {
            const teacherIDRaw = await AsyncStorage.getItem('@reportCard:teacherID')

            if (teacherIDRaw) {
                setTeacherID(teacherIDRaw)
            }
        }

        load().then()
    }, [])
    
    return (
        <TypesContext.Provider value={{ login, logout, teacherID }}>
           {children}
        </TypesContext.Provider>
    )
}

export default AuthProvider