import { RefObject, Dispatch, SetStateAction } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import IIncome from '../../../../types/income'
import { useNavigation } from '@react-navigation/native'
import { ListRenderItemInfo } from '@shopify/flash-list'
import Income from './Income'

function useRenderItem(search: string, modalizeOptions: RefObject<IHandles>, setIncome: Dispatch<SetStateAction<IIncome>>) {
    const navigation = useNavigation()

    function renderItem({ item: income, index }: ListRenderItemInfo<IIncome>) {
        const searchIncludePayDate = income.payDate.toUpperCase().includes(search.toUpperCase())
        const searchIncludeValue = income.value.toUpperCase().includes(search.toUpperCase())
        const searchIncludeValueRaw = income.valueRaw.toString().toUpperCase().includes(search.toUpperCase())
        const searchIncludeStudentName = income.student.name.toUpperCase().includes(search.toUpperCase())

        function handlePress() {
            navigation.navigate('AdminIncome', {
                incomeID: income._id
            })
        }

        if (searchIncludePayDate || searchIncludeValue || searchIncludeValueRaw || searchIncludeStudentName) {
            return (
                <Income onLongPress={async () => {
                    setIncome(income)

                    modalizeOptions.current.open()
                }} onPress={handlePress} index={index} income={income}/>
            )
        }
    }

    return renderItem
}

export default useRenderItem