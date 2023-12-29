import { ITheme } from '../../types'
import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, ContainerIcon, Icon, Title, ContainerIconSecondary, IconSecondary } from './style'
import { FadeInUp } from 'react-native-reanimated'
import limitText from '../../utils/limitText'

interface Iprops {
    children?: string
    onPress?: () => void
    onPressSecondary?: () => void
    color?: keyof ITheme | string
    icon?: keyof typeof MaterialIcons.glyphMap
    iconSecondary?: keyof typeof MaterialIcons.glyphMap
}

const HeaderBack: FC<Iprops> = ({ onPress, color='primary', icon='arrow-back-ios', children, iconSecondary, onPressSecondary }) => {
    const navigation = useNavigation()

    return (
        <Container entering={FadeInUp}>
            <ContainerIcon onPress={onPress || navigation.goBack}>
                <Icon color={color} name={icon} size={25}/>
            </ContainerIcon>
            <Title color={color}>{limitText(children, 25)}</Title>
            {iconSecondary && (
                <ContainerIconSecondary onPress={onPressSecondary}>
                    <IconSecondary color={color} name={iconSecondary} size={28}/>
                </ContainerIconSecondary>
            )}
        </Container>
    )
}

export default HeaderBack