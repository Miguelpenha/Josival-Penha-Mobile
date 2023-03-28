import { INavigation } from '../../../types'
import { FC, useState, useEffect } from 'react'
import IStudent from '../../../types/student'
import { useNavigation, useRoute } from '@react-navigation/native'
import api from '../../../services/api'
import { Container } from './style'
import { ListRenderItemInfo } from 'react-native'
import Student from './Student'

interface IProps {
    search: string
}

interface IParams {
    next: keyof INavigation
}

const Students: FC<IProps> = ({ search }) => {
    const [students, setStudents] = useState<IStudent[]>()
    const navigation = useNavigation()
    const params = useRoute().params as IParams

    useEffect(() => {
        async function getStudents() {
            const { data } = await api.get('/students')

            setStudents(data)
        }

        getStudents().then()
    }, [])

    return (
        <Container
            data={students}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }: ListRenderItemInfo<IStudent>) => {
                if (item.name.toUpperCase().includes(search.toUpperCase())) {
                    return <Student student={item} onPress={() => navigation.navigate(params.next, {
                        studentID: item._id
                    } as any)}/>
                }
            }}
        />
    )
}

export default Students