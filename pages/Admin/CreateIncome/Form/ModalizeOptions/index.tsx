import { RefObject, Dispatch, SetStateAction, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { Title } from './style'
import Button from '../../../../../components/Button'

interface IProps {
    options: string[]
    modalize: RefObject<IHandles>
    setOption: Dispatch<SetStateAction<string>>
}

const ModalizeOptions: FC<IProps> = ({ setOption, modalize, options }) => {
    function handlePress(option: string) {
        setOption(option)

        modalize.current.close()
    }

    return (
        <>
            <Title>Escolha uma opção</Title>
            {options.map((option, index) => (
                <Button key={index} title={option} index={index} onPress={() => handlePress(option)}/>
            ))}
        </>
    )
}

export default ModalizeOptions