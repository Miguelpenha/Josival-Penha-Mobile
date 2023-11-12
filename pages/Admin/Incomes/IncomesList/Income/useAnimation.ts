import { AnimateProps, useSharedValue, useAnimatedStyle, withTiming, withSequence } from 'react-native-reanimated'
import { TouchableOpacityProps } from 'react-native'

function useAnimation(onPress: () => void, onLongPress: () => void): AnimateProps<TouchableOpacityProps> {
    const scale = useSharedValue(1)

    const animation = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }))

    return {
        style: animation,
        onPressIn() {
            scale.value = withTiming(0.9)
        },
        onPressOut() {
            scale.value = withTiming(1)
        },
        onPress() {
            scale.value = withSequence(
                withTiming(0.9, {
                    duration: 200
                }),
                withTiming(1, {
                    duration: 200
                })
            )
            
            setTimeout(onPress, 200)
        },
        onLongPress() {
            scale.value = withSequence(
                withTiming(0.9, {
                    duration: 200
                }),
                withTiming(1, {
                    duration: 200
                })
            )
            
            setTimeout(onLongPress, 200)
        }
    }
}

export default useAnimation