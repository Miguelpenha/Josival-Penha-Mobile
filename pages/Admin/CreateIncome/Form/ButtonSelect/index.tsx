import { FC } from 'react'
import useAnimation from './useAnimation'
import { Container, Text } from './style'

interface IProps {
    text: string
    onPress: () => void
}

const ButtonSelect: FC<IProps> = ({ text, onPress }) => {
    const animation = useAnimation(onPress)

    return (
        <Container {...animation} activeOpacity={0.5}>
            <Text>{text}</Text>
        </Container>
    )
}

export default ButtonSelect