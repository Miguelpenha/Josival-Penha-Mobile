import { ITypeLogin } from '../../types'
import { useNavigation, useRoute } from '@react-navigation/native'
import useGoogle from './useGoogle'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import Button from '../../components/Button'
import Icon from '../../components/Icon'

interface IParams {
    type: ITypeLogin
}

function Sign() {
    const navigation = useNavigation()
    const { type } = useRoute().params as IParams
    const { loginGoogle } = useGoogle(type)

    return (
        <ContainerPd>
            <HeaderBack onPress={() => navigation.navigate('Home')}>Escolha a forma de login</HeaderBack>
            <Button index={1} title="Google" onPress={loginGoogle}>
                <Icon icon="google" typeIcon="AntDesign"/>
            </Button>
            <Button index={2} title="Login" onPress={() => navigation.navigate('Login', { type })}>
                <Icon icon="login"/>
            </Button>
        </ContainerPd>
    )
}

export default Sign