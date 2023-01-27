import { IconName, TypeIcon } from './type'
import { FC } from 'react'
import useAnimation from './useAnimation'
import { Container, Text } from './style'
import Icon from './Icon'

interface IProps {
    index: number
    children: any
    title?: string
    icon?: IconName
    onPress: () => void
    typeIcon?: TypeIcon
}

const Button: FC<IProps> = ({ index, onPress, children, icon, typeIcon='MaterialIcons', title }) => {
    const animation = useAnimation(index, onPress)
    
    return (
        <Container {...animation}>
            <Icon children={children} icon={icon} typeIcon={typeIcon}/>
            <Text>{icon ? (children || title) : title}</Text>
        </Container>
    )
}

export default Button