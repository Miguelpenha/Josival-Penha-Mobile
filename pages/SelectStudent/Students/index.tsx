import { FC } from 'react'
import api from '../../../services/api'
import IStudent from '../../../types/student'
import useRender from './render'
import useRefreshProps from '../../../components/useRefreshProps'
import { Container } from './style'
import { RefreshControl } from 'react-native'
import Loading from '../../../components/Loading'

interface IProps {
    search: string
}

const Students: FC<IProps> = ({ search }) => {
    const { data: students, mutate } = api.get<IStudent[]>('/students')
    const render = useRender(search)
    const refreshProps = useRefreshProps(mutate)

    if (students) {
        return (
            <Container
                data={students}
                renderItem={render}
                keyExtractor={(item, index) => String(index)}
                refreshControl={<RefreshControl {...refreshProps}/>}
            />
        )
    } else {
        return <Loading size={70}/>
    }
}

export default Students