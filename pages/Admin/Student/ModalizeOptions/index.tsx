import IStudent from '../../../../types/student'
import { RefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { KeyedMutator } from 'swr'
import { Container, ButtonCancel } from './style'
import Icon from '../../../../components/Icon'
import useHandleDeleteStudent from './useHandleDeleteStudent'

interface IProps {
    student: IStudent
    modalize: RefObject<IHandles>
    mutate: KeyedMutator<IStudent>
}

const ModalizeOptions: FC<IProps> = ({ student, mutate, modalize }) => {
    const handleDeleteStudent = useHandleDeleteStudent(student._id, mutate)

    return (
        <Container>
            <ButtonCancel index={1} title="Deletar" onPress={async () => {
                modalize.current.close()

                await handleDeleteStudent()
            }}>
                <Icon icon="delete"/>
            </ButtonCancel>
        </Container>
    )
}

export default ModalizeOptions