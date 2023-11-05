import { FC } from 'react'
import IIncome from '../../../../../types/income'
import useAnimation from './useAnimation'
import { Container, PayDate, Value, Student } from './style'
import { ZoomInEasyDown } from 'react-native-reanimated'

interface IProps {
    index: number
    income: IIncome
    onPress: () => void
}

const Income: FC<IProps> = ({ index, onPress, income }) => {
    const animation = useAnimation(onPress)

    return (
        <Container
            {...animation}
            activeOpacity={0.5}
            entering={ZoomInEasyDown.delay(index*30)}
        >
            <PayDate>{income.payDate}</PayDate>
            <Value>{income.value}</Value>
            <Student>{income.student.name}</Student>
        </Container>
    )
}

export default Income