import { IData } from './type'
import { useNavigation } from '@react-navigation/native'
import apiBase from '../../../../services/api/base'
import toast from 'react-native-toast-message'

type IResponse = { created: boolean }

function useHandleSubmit(data: IData) {
    const navigation = useNavigation()

    async function handleSubmit() {
        const { created } = (await apiBase.post<IResponse>('/incomes', data)).data

        if (created) {
            navigation.reset({
                index: 1,
                routes: [{ name: 'AdminHome' }, { name: 'AdminIncomes' }]
            })

            toast.show({
                type: 'success',
                text1: 'Receita cadastrada com sucesso!'
            })
        } else {
            toast.show({
                type: 'error',
                text1: 'Houve um erro ao cadastrar a receita'
            })
        }
    }

    return handleSubmit
}

export default useHandleSubmit