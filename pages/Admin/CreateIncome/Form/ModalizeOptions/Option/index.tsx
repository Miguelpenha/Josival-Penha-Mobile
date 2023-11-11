import { FC } from 'react'
import useAnimation from './useAnimation'
import { Container, Text } from './style'

interface IProps {
    index: number
    children: any
    onPress: () => void | Promise<void>
}

const Option: FC<IProps> = ({ index, onPress, children, ...props }) => {
    const animation = useAnimation(index, onPress)
    
    return (
        <Container {...animation} {...props}>
            <Text>{children}</Text>
        </Container>
    )
}

export default Option