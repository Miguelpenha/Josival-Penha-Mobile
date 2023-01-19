import { FC, useState } from 'react'
import { TextInputProps } from 'react-native'
import useAnimation from './useAnimation'
import { Container, ContainerIcon, Icon, InputRaw } from './style'

interface Iprops extends TextInputProps {
    icon?: boolean
}

const Input: FC<Iprops> = ({ icon, ...props }) => {
    const [hidden, setHidden] = useState(false)
    const animation = useAnimation()

    return (
        <Container>
            {icon && (
                <ContainerIcon activeOpacity={0.4} onPress={() => setHidden(!hidden)}>
                    <Icon name={`visibility${hidden ? '-off' : ''}`} size={25}/>
                </ContainerIcon>
            )}
            <InputRaw {...props} secureTextEntry={!hidden} keyboardType={hidden ? 'visible-password' : 'default'} icon={icon} {...animation}/>
        </Container>
    )
}

export default Input