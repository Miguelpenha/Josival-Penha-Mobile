import { FC, useMemo, useState } from 'react'
import api from '../../../../services/api'
import IIncome from '../../../../types/income'
import useRenderItem from './useRenderItem'
import useRefreshProps from '../../../../components/useRefreshProps'
import useModalize from '../../../../components/useModalize'
import { FlashList } from '@shopify/flash-list'
import { RefreshControl } from 'react-native'
import { Modalize } from 'react-native-modalize'
import ModalizeOptions from './ModalizeOptions'
import Loading from '../../../../components/Loading'

interface IProps {
    search: string
}

const IncomesList: FC<IProps> = ({ search }) => {
    const { data: incomesRaw, mutate } = api.get<IIncome[]>('/incomes?student=true')
    const { modalize: modalizeOptions, props: propsModalizeOptions } = useModalize(40)
    const [income, setIncome] = useState<IIncome>()
    const renderItem = useRenderItem(search, modalizeOptions.ref, setIncome)
    const refreshProps = useRefreshProps(mutate)
    const incomes = useMemo(() => 
        incomesRaw && incomesRaw.sort((a, b) => new Date(b.created.system as any).getTime() - new Date(a.created.system as any).getTime())
    , [incomesRaw])
    
    if (incomes) {
        return (
            <>
                <FlashList
                    data={incomes}
                    extraData={search}
                    estimatedItemSize={55}
                    renderItem={renderItem}
                    refreshControl={<RefreshControl {...refreshProps}/>}
                />
                <Modalize {...propsModalizeOptions}>
                    <ModalizeOptions mutate={mutate} income={income} modalize={modalizeOptions.ref}/>
                </Modalize>
            </>
        )
    } else {
        return <Loading size={70}/>
    }
}

export default IncomesList