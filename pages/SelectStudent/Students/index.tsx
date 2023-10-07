import { FC } from 'react'
import api from '../../../services/api'
import IStudent from '../../../types/student'
import useRenderItem from './useRenderItem'
import useRefreshProps from '../../../components/useRefreshProps'
import { Container } from './style'
import { RefreshControl } from 'react-native'
import Loading from '../../../components/Loading'

interface IProps {
    search: string
}

const Students: FC<IProps> = ({ search }) => {
    const { data: students, mutate } = api.get<IStudent[]>('/students')
    const renderItem = useRenderItem(search)
    const refreshProps = useRefreshProps(mutate)
    
    if (students) {
        return (
            <Container
                data={students}
                extraData={search}
                estimatedItemSize={55}
                renderItem={renderItem}
                refreshControl={<RefreshControl {...refreshProps}/>}
            />
        )
    } else {
        return <Loading size={70}/>
    }
}

export default Students