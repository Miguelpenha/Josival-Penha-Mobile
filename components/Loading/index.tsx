import { ActivityIndicatorProps, Platform } from 'react-native'
import { ITheme } from '../../types'
import { FC, memo } from 'react'
import { useTheme } from 'styled-components'
import { LoadingRaw } from './style'
import { FadingTransition } from 'react-native-reanimated'

interface IProps extends ActivityIndicatorProps {
    size?: number
    color?: keyof ITheme
}

const Loading: FC<IProps> = ({ size=50, color, ...props }) => {
    const theme = useTheme()

    return (
        <LoadingRaw
            {...props}
            layout={FadingTransition}
            color={theme[color] || theme.primary}
            size={Platform.OS === 'android' ? size : 'large'}
        />
    )
}

export default memo(Loading)