import { FC, memo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, ContainerIcon, Icon, Title } from './style'
import { FadeInUp } from 'react-native-reanimated'
import limitText from '../../utils/limitText'

interface Iprops {
    children?: string
    onPress?: () => void
}

const HeaderBack: FC<Iprops> = ({ onPress, children }) => {
    const navigation = useNavigation()

    return (
        <Container entering={FadeInUp}>
            <ContainerIcon onPress={onPress || navigation.goBack}>
                <Icon name="arrow-back-ios" size={25}/>
            </ContainerIcon>
            <Title>{limitText(children, 25)}</Title>
        </Container>
    )
}

export default memo(HeaderBack)