import { FC } from 'react'
import { TextInputProps } from 'react-native'
import useAnimation from './useAnimation'
import { Input } from './style'

const InputSearch: FC<TextInputProps> = props => {
    const animation = useAnimation()

    return (
        <Input {...props} {...animation}/>
    )
}

export default InputSearch