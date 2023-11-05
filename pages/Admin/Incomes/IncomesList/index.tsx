import { FC, useMemo } from 'react'
import api from '../../../../services/api'
import IIncome from '../../../../types/income'
import useRenderItem from './useRenderItem'
import useRefreshProps from '../../../../components/useRefreshProps'
import { FlashList } from '@shopify/flash-list'
import { RefreshControl } from 'react-native'
import Loading from '../../../../components/Loading'

interface IProps {
    search: string
}

const IncomesList: FC<IProps> = ({ search }) => {
    const { data: incomesRaw, mutate } = api.get<IIncome[]>('/incomes?student=true')
    const renderItem = useRenderItem(search)
    const refreshProps = useRefreshProps(mutate)
    const incomes = useMemo(() => 
        incomesRaw && incomesRaw.sort((a, b) => b.valueRaw - a.valueRaw)
    , [incomesRaw])
    
    if (incomes) {
        return (
            <FlashList
                data={incomes}
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

export default IncomesList