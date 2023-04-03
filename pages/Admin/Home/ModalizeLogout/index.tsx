import { RefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useLogout from './useLogout'
import { Title } from './style'
import { FadeInUp } from 'react-native-reanimated'
import Button from '../../../../components/Button'

interface IProps {
    modalize: RefObject<IHandles>
}

const ModalizeLogout: FC<IProps> = ({ modalize }) => {
    const logout = useLogout()

    async function handleLogout() {
        modalize.current.close()

        await logout()
    }

    return <>
        <Title entering={FadeInUp.duration(700)}>Fazer logout?</Title>
        <Button title="Logout" index={1} onPress={handleLogout}/>
        <Button title="Cancelar" index={2} onPress={modalize.current.close}/>
    </>
}

export default ModalizeLogout