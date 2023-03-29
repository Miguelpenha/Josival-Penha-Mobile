import { FC } from 'react'
import IStudent from '../../../../types/student'
import useAnimation from './useAnimation'
import { Container, Name } from './style'
import { FadeInDown } from 'react-native-reanimated'
import { memo } from 'react'

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
            entering={FadeInDown.delay(index <= 15 ? index*30 : 200)}
        >
            <Name>{student.name}</Name>
        </Container>
    )
}

export default memo(Student)