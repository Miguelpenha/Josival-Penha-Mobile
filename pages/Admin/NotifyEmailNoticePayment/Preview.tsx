import { FC, memo } from 'react'
import { ScrollView, useWindowDimensions } from 'react-native'
import RenderHTML from 'react-native-render-html'

interface IProps {
    data: string
}

const Preview: FC<IProps> = ({ data }) => {
    const { width } = useWindowDimensions()

    if (data) {
        return (
            <ScrollView>
                <RenderHTML
                    contentWidth={width}
                    source={{ html: data }}
                    renderersProps={{ img: { enableExperimentalPercentWidth: true } }}
                />
            </ScrollView>
        )
    } else {
        return null
    }
}

export default memo(Preview)