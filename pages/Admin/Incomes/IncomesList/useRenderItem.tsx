import { useNavigation } from '@react-navigation/native'
import { ListRenderItemInfo } from '@shopify/flash-list'
import IIncome from '../../../../types/income'
import Income from './Income'

function useRenderItem(search: string) {
    const navigation = useNavigation()

    function renderItem({ item: income, index }: ListRenderItemInfo<IIncome>) {
        const searchIncludePayDate = income.payDate.toUpperCase().includes(search.toUpperCase())
        const searchIncludeValue = income.value.toUpperCase().includes(search.toUpperCase())
        const searchIncludeStudentName = income.student.name.toUpperCase().includes(search.toUpperCase())

        function handlePress() {
            navigation.navigate('AdminIncome', {
                incomeID: income._id
            })
        }

        if (searchIncludePayDate || searchIncludeValue || searchIncludeStudentName) {
            return (
                <Income onPress={handlePress} index={index} income={income}/>
            )
        }
    }

    return renderItem
}

export default useRenderItem