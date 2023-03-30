import { useNavigation } from '@react-navigation/native'
import ContainerDefault from '../../components/ContainerDefault'
import { Title } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Button from '../../components/Button'
import Icon from '../../components/Icon'

function Home() {
    const navigation = useNavigation()

    return (
        <ContainerDefault>
            <Title entering={FadeInDown}>Faça login</Title>
            <Button index={1} title="Professoras" onPress={() => navigation.navigate('Sign', { type: 'teacher' })}>
                <Icon icon="teacher" typeIcon="Custom"/>
            </Button>
            <Button index={2} title="Admin" onPress={() => navigation.navigate('Sign', { type: 'admin' })}>
                <Icon icon="admin" typeIcon="Custom"/>
            </Button>
        </ContainerDefault>
    )
}

export default Home