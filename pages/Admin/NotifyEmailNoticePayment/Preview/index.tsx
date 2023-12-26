import { FC } from 'react'
import { useWindowDimensions } from 'react-native'
import { Container } from './style'
import { FadeInDown } from 'react-native-reanimated'
import RenderHTML from 'react-native-render-html'

interface IProps {
    data: string
}

const Preview: FC<IProps> = ({ data }) => {
    const { width } = useWindowDimensions()

    if (data) {
        return (
            <Container entering={FadeInDown.delay(600)}>
                <RenderHTML
                    contentWidth={width}
                    source={{ html: data }}
                    renderersProps={{ img: { enableExperimentalPercentWidth: true } }}
                />
            </Container>
        )
    } else {
        return null
    }
}

export default Preview