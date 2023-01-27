import { ViewStyle } from 'react-native'
import { FC } from 'react'
import useLoad from './useLoad'
import { Container, ContainerScroll } from './style'
import Loading from '../Loading'

interface Iprops {
    children: any
    scroll?: boolean
    style?: ViewStyle
}

const ContainerPd: FC<Iprops> = ({ scroll, children, ...props }) => {
    const loading = useLoad()

    if (loading) {
        if (!scroll) {
            return (
                <Container {...props}>{children}</Container>
            )
        } else {
            return (
                <ContainerScroll {...props}>{children}</ContainerScroll>
            )
        }
    } else {
        return <Loading/>
    }
}

export default ContainerPd