import { FC, useState } from 'react'
import { TextInputProps, ViewStyle } from 'react-native'
import useAnimation from './useAnimation'
import { Container, ContainerIcon, Icon, InputRaw } from './style'

interface Iprops extends TextInputProps {
    icon?: boolean
    styleContainer?: ViewStyle
}

const Input: FC<Iprops> = ({ style, icon, styleContainer, ...props }) => {
    const [hidden, setHidden] = useState(false)
    const animation = useAnimation(style as object)

    return (
        <Container style={styleContainer}>
            {icon && <>
                <ContainerIcon activeOpacity={0.4} onPress={() => setHidden(!hidden)}>
                    <Icon name={`visibility${hidden ? '-off' : ''}`} size={25}/>
                </ContainerIcon>
            </>}
            <InputRaw icon={icon} {...animation} {...props}/>
        </Container>
    )
}

export default Input