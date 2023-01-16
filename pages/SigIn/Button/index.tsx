import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { FC } from 'react'
import useAnimation from './useAnimation'
import { Container, IconMaterial, IconAnt, Text } from './style'

interface IProps {
    index: number
    children: string
    onPress: () => void
    typeIcon?: 'MaterialIcons' | 'AntDesign'
    icon: keyof typeof MaterialIcons.glyphMap | keyof typeof AntDesign.glyphMap
}

const Button: FC<IProps> = ({ index, onPress, typeIcon='MaterialIcons', icon, children }) => {
    const animation = useAnimation(index, onPress)

    return (
        <Container {...animation}>
            {typeIcon == 'MaterialIcons' ? (
                <IconMaterial name={icon} size={30}/>
            ) : (
                <IconAnt name={icon} size={30}/>
            )}
            <Text>{children}</Text>
        </Container>
    )
}

export default Button