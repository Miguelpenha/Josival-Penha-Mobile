import { FC } from 'react'
import IStudent from '../../../../types/student'
import { Container, Name } from './style'

interface IProps {
    student: IStudent
    onPress: () => void
}

const Student: FC<IProps> = ({ onPress, student }) => {
    return (
        <Container activeOpacity={0.5} onPress={onPress}>
            <Name>{student.name}</Name>
        </Container>
    )
}

export default Student