import { FC, memo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, ContainerIcon, Icon, Title } from './style'
import limitText from '../../utils/limitText'

interface Iprops {
    children?: string
}

const HeaderBack: FC<Iprops> = ({ children }) => {
    const navigation = useNavigation()

    return (
        <Container>
            <ContainerIcon onPress={navigation.goBack}>
                <Icon name="arrow-back-ios" size={25}/>
            </ContainerIcon>
            <Title>{limitText(children, 25)}</Title>
        </Container>
    )
}

export default memo(HeaderBack)