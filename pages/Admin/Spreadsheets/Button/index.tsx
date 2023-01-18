import { FC } from 'react'
import useAnimation from './useAnimation'
import { Container, Text } from './style'

interface IProps {
    index: number
    title: string
    children: any
    onPress: () => void
}

const Button: FC<IProps> = ({ index, onPress, children, title }) => {
    const animation = useAnimation(index, onPress)
    
    return (
        <Container {...animation}>
            {children}
            <Text>{title}</Text>
        </Container>
    )
}

export default Button