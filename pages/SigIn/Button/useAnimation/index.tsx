import { AnimateProps, FadeInDown } from 'react-native-reanimated'
import { TouchableOpacityProps } from 'react-native'
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import events from './events'

function useAnimation(onPress: () => void): AnimateProps<TouchableOpacityProps> {
    const scale = useSharedValue(1)

    const animationScale = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }))

    return {
        activeOpacity: 0.5,
        style: animationScale,
        ...events(scale, onPress),
        entering: FadeInDown.delay(500).duration(400)
    }
}

export default useAnimation