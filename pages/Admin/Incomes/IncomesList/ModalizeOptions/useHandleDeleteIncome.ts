import { KeyedMutator } from 'swr'
import IIncome from '../../../../../types/income'
import apiBase from '../../../../../services/api/base'
import Toast from 'react-native-toast-message'

function useHandleDeleteIncome(incomeID: string, mutate: KeyedMutator<IIncome[]>) {
    async function handleDeleteIncome() {
        const { deleted }: { deleted: boolean } = await (await apiBase.delete(`/incomes/${incomeID}`)).data

        await mutate()

        if (deleted) {
            Toast.show({
                type: 'success',
                text1: 'Receita deletada com sucesso'
            })
        } else {
            Toast.show({
                type: 'error',
                text1: 'Houve um error ao deletar a receita'
            })
        }
    }

    return handleDeleteIncome
}

export default useHandleDeleteIncome