import { ITheme } from '../../types'
import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, ContainerIcon, Icon, Title, ContainerIconSettings, IconSettings } from './style'
import { FadeInUp } from 'react-native-reanimated'
import limitText from '../../utils/limitText'

interface Iprops {
    children?: string
    settings?: boolean
    onPress?: () => void
    color?: keyof ITheme | string
    icon?: keyof typeof MaterialIcons.glyphMap
}

const HeaderBack: FC<Iprops> = ({ onPress, color='primary', icon='arrow-back-ios', children, settings=false }) => {
    const navigation = useNavigation()

    return (
        <Container entering={FadeInUp}>
            <ContainerIcon onPress={onPress || navigation.goBack}>
                <Icon color={color} name={icon} size={25}/>
            </ContainerIcon>
            <Title color={color}>{limitText(children, 25)}</Title>
            {settings && (
                <ContainerIconSettings onPress={() => navigation.navigate('Settings')}>
                    <IconSettings color={color} name="settings" size={28}/>
                </ContainerIconSettings>
            )}
        </Container>
    )
}

export default HeaderBack