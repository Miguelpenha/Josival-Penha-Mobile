import ContainerPd from '../../components/ContainerPd'
import { Title } from './style'
import { FadeInDown } from 'react-native-reanimated'

function Class() {
    return (
        <ContainerPd>
            <Title entering={FadeInDown}>Turmas</Title>
        </ContainerPd>
    )
}

export default Class