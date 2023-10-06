import { ViewStyle, TouchableOpacityProps } from 'react-native'
import { AnimateProps } from 'react-native-reanimated'
import { FC, useState } from 'react'
import useAnimation from './useAnimation'
import { Container, Text, Loading } from './style'

interface IProps extends AnimateProps<TouchableOpacityProps> {
    index?: number
    title?: string
    children?: any
    style?: ViewStyle
    loading?: boolean
    onPress: () => void | Promise<void>
}

const Button: FC<IProps> = ({ index=1, loading=false, onPress, style, children, title, ...props }) => {
    const animation = useAnimation(index, handlePress, style)
    const [loadingState, setLoadingState] = useState(false)

    async function handlePress() {
        loading && setLoadingState(true)

        await onPress()

        loading && setLoadingState(false)
    }
    
    return (
        <Container disabled={loadingState} {...animation} {...props}>
            {loadingState ? <Loading color="secondaryColor" size={35}/> : children}
            <Text>{title}</Text>
        </Container>
    )
}

export default Button