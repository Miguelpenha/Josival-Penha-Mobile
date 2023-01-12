import { FC, useState, useEffect } from 'react'
import { ITeacher } from '../../types'
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TypesContext from './Context'

interface Iprops {
    children: any
}

const AuthProvider: FC<Iprops> = ({ children }) => {
    const [teacherID, setTeacherID] = useState<string>()
    
    async function login(login: string, password: string) {
        const { authenticated, teacher }: { authenticated: boolean, teacher: ITeacher } = (await api.post('/professoras/login', {
            login,
            senha: password
        })).data

        if (authenticated) {
            setTeacherID(teacher.id)

            await AsyncStorage.setItem('@reportCard:teacherID', teacher.id)

            return { authenticated: true }
        } else {
            return { authenticated: false }
        }
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
        <TypesContext.Provider value={{ login, teacherID }}>
           {children}
        </TypesContext.Provider>
    )
}

export default AuthProvider