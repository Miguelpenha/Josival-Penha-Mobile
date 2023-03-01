import { FC, useState, useEffect } from 'react'
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TypesContext from './Context'

interface Iprops {
    children: any
}

const AuthProvider: FC<Iprops> = ({ children }) => {
    const [teacherID, setTeacherID] = useState<string | null>(null)
    const [isAdmin, setIsAdmin] = useState(false)

    async function loginLocalAdmin(login: string, password: string) {
        const { authenticated }: { authenticated: boolean } = (await api.post('/admin/auth/login/local', {
            login,
            password
        })).data

        if (authenticated) {
            setIsAdmin(authenticated)

            await AsyncStorage.setItem('@reportCard:isAdmin', String(authenticated))

            return { authenticated: true }
        } else {
            return { authenticated: false }
        }
    }

    async function loginGoogleAdmin(accessToken: string) {
        const { authenticated }: { authenticated: boolean } = (await api.post('/admin/auth/login/google', {
            accessToken
        })).data

        if (authenticated) {
            setIsAdmin(authenticated)

            await AsyncStorage.setItem('@reportCard:isAdmin', String(authenticated))

            return { authenticated: true }
        } else {
            return { authenticated: false }
        }
    }

    async function logoutAdmin() {
        setIsAdmin(false)

        await AsyncStorage.removeItem('@reportCard:isAdmin')
    }
    
    async function loginLocalTeacher(login: string, password: string) {
        const { authenticated, teacherID }: { authenticated: boolean, teacherID: string } = (await api.post('/teachers/auth/login/local', {
            login,
            password
        })).data

        if (authenticated) {
            setTeacherID(teacherID)

            await AsyncStorage.setItem('@reportCard:teacherID', String(teacherID))

            return { authenticated: true }
        } else {
            return { authenticated: false }
        }
    }

    async function loginGoogleTeacher(accessToken: string) {
        const { authenticated, teacherID }: { authenticated: boolean, teacherID: string } = (await api.post('/teachers/auth/login/google', {
            accessToken
        })).data

        if (authenticated) {
            setTeacherID(teacherID)

            await AsyncStorage.setItem('@reportCard:teacherID', String(teacherID))

            return { authenticated: true }
        } else {
            return { authenticated: false }
        }
    }

    async function logoutTeacher() {
        setTeacherID(null)

        await AsyncStorage.removeItem('@reportCard:teacherID')
    }

    useEffect(() => {
        async function load() {
            const isAdminRaw = await AsyncStorage.getItem('@reportCard:isAdmin')
            const teacherIDRaw = await AsyncStorage.getItem('@reportCard:teacherID')

            if (teacherIDRaw) {
                setTeacherID(teacherIDRaw)
            } else if (isAdminRaw) {
                setIsAdmin(Boolean(isAdminRaw))
            }
        }

        load().then()
    }, [])
    
    return (
        <TypesContext.Provider value={{
            isAdmin,
            teacherID,
            admin: {
                logout: logoutAdmin,
                loginLocal: loginLocalAdmin,
                loginGoogle: loginGoogleAdmin
            },
            teacher: {
                logout: logoutTeacher,
                loginLocal: loginLocalTeacher,
                loginGoogle: loginGoogleTeacher
            }
        }}>
           {children}
        </TypesContext.Provider>
    )
}

export default AuthProvider