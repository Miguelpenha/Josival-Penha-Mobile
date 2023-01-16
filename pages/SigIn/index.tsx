import useLoad from './useLoad'
import { useNavigation } from '@react-navigation/native'
import useGoogle from './useGoogle'
import ContainerPd from '../../components/ContainerPd'
import { Title } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Button from './Button'
import Loading from '../../components/Loading'

function SigIn() {
    const loading = useLoad()
    const navigation = useNavigation()
    const { loginGoogle } = useGoogle()

    if (loading) {
        return (
            <ContainerPd>
                <Title entering={FadeInDown}>Entrar</Title>
                <Button index={1} icon="login" onPress={() => navigation.navigate('Login')}>Login</Button>
                <Button index={2} typeIcon="AntDesign" icon="google" onPress={loginGoogle}>Google</Button>
            </ContainerPd>
        )
    } else {
        return <Loading/>
    }
}

export default SigIn