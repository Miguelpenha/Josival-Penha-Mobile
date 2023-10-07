import { FC } from 'react'
import IStudent from '../../../../types/student'
import useAnimation from './useAnimation'
import { Container, Name } from './style'
import { ZoomInEasyDown, FadeOutDown } from 'react-native-reanimated'

interface IProps {
    index: number
    student: IStudent
    onPress: () => void
}

const Student: FC<IProps> = ({ index, onPress, student }) => {
    const animation = useAnimation(onPress)

    return (
        <Container
            {...animation}
            activeOpacity={0.5}
            entering={ZoomInEasyDown.delay(index*30)}
            exiting={FadeOutDown.delay(index).duration(400)}
        >
            <Name>{student.name}</Name>
        </Container>
    )
}

export default Student