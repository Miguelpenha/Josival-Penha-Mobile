import { FC } from 'react'
import { Container, Text } from './style'
import useAnimation from './useAnimation'

interface IProps {
    onPress: () => void
}

const ButtonSubmit: FC<IProps> = ({ onPress }) => {
    const animation = useAnimation(onPress)

    return (
        <Container {...animation}>
            <Text>Confirmar</Text>
        </Container>
    )
}

export default ButtonSubmit