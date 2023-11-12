import IIncome from '../../../../../types/income'
import { RefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { KeyedMutator } from 'swr'
import { ButtonCancel } from './style'
import Icon from '../../../../../components/Icon'
import Button from '../../../../../components/Button'
import useHandleDeleteIncome from './useHandleDeleteIncome'

interface IProps {
    income: IIncome
    modalize: RefObject<IHandles>
    mutate: KeyedMutator<IIncome[]>
}

const ModalizeOptions: FC<IProps> = ({ income, mutate, modalize }) => {
    const handleDeleteIncome = useHandleDeleteIncome(income._id, mutate)

    return (
        <>
            <ButtonCancel title="Deletar" onPress={async () => {
                modalize.current.close()

                await handleDeleteIncome()
            }} index={1}>
                <Icon icon="delete"/>
            </ButtonCancel>
            <Button title="Editar" onPress={modalize.current.close} index={2}>
                <Icon icon="edit"/>
            </Button>
        </>
    )
}

export default ModalizeOptions