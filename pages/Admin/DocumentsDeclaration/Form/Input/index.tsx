import { FC } from 'react'
import { TextInputProps } from 'react-native'
import useAnimation from './useAnimation'
import { InputRaw } from './style'

const Input: FC<TextInputProps> = props => {
    const animation = useAnimation()

    return (
        <InputRaw {...props} {...animation}/>
    )
}

export default Input