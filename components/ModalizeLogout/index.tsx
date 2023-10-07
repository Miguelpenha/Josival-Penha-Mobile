import { ITypeLogin } from '../../types'
import { RefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useLogout from './useLogout'
import { Title, ButtonCancel } from './style'
import { FadeInUp } from 'react-native-reanimated'
import Icon from '../Icon'
import Button from '../Button'

interface IProps {
    type: ITypeLogin
    modalize: RefObject<IHandles>
}

const ModalizeLogout: FC<IProps> = ({ type, modalize }) => {
    const logout = useLogout(type)

    async function handleLogout() {
        modalize.current.close()

        await logout()
    }

    return <>
        <Title entering={FadeInUp.duration(700)}>Fazer logout?</Title>
        <ButtonCancel title="Logout" index={1} onPress={handleLogout}>
            <Icon icon="logout"/>
        </ButtonCancel>
        <Button title="Cancelar" index={2} onPress={modalize.current.close}>
            <Icon icon="close"/>
        </Button>
    </>
}

export default ModalizeLogout