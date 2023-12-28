import { FC, useMemo } from 'react'
import api from '../../../services/api'
import IStudent from '../../../types/student'
import useRenderItem from './useRenderItem'
import useRefreshProps from '../../../components/useRefreshProps'
import { FlashList } from '@shopify/flash-list'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { RefreshControl } from 'react-native'
import Loading from '../../../components/Loading'

interface IProps {
    search: string
}

const Students: FC<IProps> = ({ search }) => {
    const { data: studentsRaw, mutate } = api.get<IStudent[]>('/students')
    const renderItem = useRenderItem(search)
    const refreshProps = useRefreshProps(mutate)
    const students = useMemo(() => 
        studentsRaw && studentsRaw.sort((a, b) => a.name.localeCompare(b.name))
    , [studentsRaw])
    
    if (students) {
        return (
            <FlashList
                data={students}
                extraData={search}
                renderItem={renderItem}
                estimatedItemSize={RFPercentage(7.5)}
                refreshControl={<RefreshControl {...refreshProps}/>}
            />
        )
    } else {
        return <Loading size={70}/>
    }
}

export default Students