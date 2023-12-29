import { KeyedMutator } from 'swr'
import IStudent from '../../../../types/student'
import { useNavigation } from '@react-navigation/native'
import apiBase from '../../../../services/api/base'
import Toast from 'react-native-toast-message'

function useHandleDeleteStudent(studentID: string, mutate: KeyedMutator<IStudent>) {
    const navigation = useNavigation()

    async function handleDeleteStudent() {
        const { deleted }: { deleted: boolean } = await (await apiBase.delete(`/students/${studentID}`)).data

        await mutate()

        if (deleted) {
            Toast.show({
                type: 'success',
                text1: 'Aluno deletado com sucesso'
            })

            navigation.navigate('AdminHome')
        } else {
            Toast.show({
                type: 'error',
                text1: 'Houve um error ao deletar o aluno'
            })
        }
    }

    return handleDeleteStudent
}

export default useHandleDeleteStudent