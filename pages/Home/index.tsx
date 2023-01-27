import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import { Title } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Button from '../../components/Button'

function Home() {
    const navigation = useNavigation()

    return (
        <ContainerPd>
            <Title entering={FadeInDown}>Faça login</Title>
            <Button index={1} icon="teacher" typeIcon="Custom" onPress={() => navigation.navigate('Sign', { type: 'teacher' })}>
                Professoras
            </Button>
            <Button index={2} icon="admin" typeIcon="Custom" onPress={() => navigation.navigate('Sign', { type: 'admin' })}>
                Admin
            </Button>
        </ContainerPd>
    )
}

export default Home