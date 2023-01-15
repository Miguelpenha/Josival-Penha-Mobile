import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { Container, Icon, Text } from './style'
import useAnimation from './useAnimation'

interface IProps {
    children: string
    onPress: () => void
    icon: keyof typeof MaterialIcons.glyphMap
}

const Button: FC<IProps> = ({ onPress, icon, children }) => {
    const animation = useAnimation(onPress)

    return (
        <Container {...animation}>
            <Icon name={icon} size={30}/>
            <Text>{children}</Text>
        </Container>
    )
}

export default Button