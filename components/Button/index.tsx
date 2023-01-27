import { ViewStyle, TouchableOpacityProps } from 'react-native'
import { AnimateProps } from 'react-native-reanimated'
import { FC } from 'react'
import useAnimation from './useAnimation'
import { Container, Text } from './style'

interface IProps extends AnimateProps<TouchableOpacityProps> {
    index?: number
    title?: string
    children?: any
    style?: ViewStyle
    onPress: () => void
}

const Button: FC<IProps> = ({ index=1, onPress, style, children, title, ...props }) => {
    const animation = useAnimation(index, onPress, style)
    
    return (
        <Container {...animation} {...props}>
            {children}
            <Text>{title}</Text>
        </Container>
    )
}

export default Button