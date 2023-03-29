import { FC } from 'react'
import useRender from './render'
import api from '../../../services/api'
import IStudent from '../../../types/student'
import { Container } from './style'
import Loading from '../../../components/Loading'

interface IProps {
    search: string
}

const Students: FC<IProps> = ({ search }) => {
    const render = useRender(search)
    const { data: students } = api.get<IStudent[]>('/students')

    if (students) {
        return (
            <Container
                data={students}
                renderItem={render}
                keyExtractor={(item, index) => String(index)}
            />
        )
    } else {
        return <Loading size={70}/>
    }
}

export default Students