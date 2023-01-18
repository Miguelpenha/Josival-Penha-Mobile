import useLoad from './useLoad'
import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import { Title, Icon } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Button from './Button'
import { Path, G } from 'react-native-svg'
import Loading from '../../components/Loading'

function Home() {
    const loading = useLoad()
    const navigation = useNavigation()

    if (loading) {
        return (
            <ContainerPd>
                <Title entering={FadeInDown}>Faça login</Title>
                <Button title="Professoras" index={1} onPress={() => navigation.navigate('Sign', { type: 'teacher' })}>
                    <Icon width="32" height="32" viewBox="0 -64 640 640">
                        <Path d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"/>
                    </Icon>
                </Button>
                <Button title="Admin" index={2} onPress={() => navigation.navigate('Sign', { type: 'admin' })}>
                    <Icon width="32" height="32" viewBox="0 0 24 24">
                        <G>
                            <Path fill="none" d="M0 0h24v24H0z"/>
                            <Path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm9 6h1v5h-8v-5h1v-1a3 3 0 0 1 6 0v1zm-2 0v-1a1 1 0 0 0-2 0v1h2z"/>
                        </G>
                    </Icon>
                </Button>
            </ContainerPd>
        )
    } else {
        return <Loading/>
    }
}

export default Home