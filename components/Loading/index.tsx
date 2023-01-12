import { FC, memo } from 'react'
import { ActivityIndicatorProps, Platform } from 'react-native'
import { useTheme } from 'styled-components'
import { LoadingRow } from './style'
import { FadingTransition } from 'react-native-reanimated'

const Loading: FC<ActivityIndicatorProps> = ({ ...props }) => {
    const theme = useTheme()

    return (
        <LoadingRow
            {...props}
            color={theme.primary}
            layout={FadingTransition}
            size={Platform.OS === 'android' ? 50 : 'large'}
        />
    )
}

export default memo(Loading)