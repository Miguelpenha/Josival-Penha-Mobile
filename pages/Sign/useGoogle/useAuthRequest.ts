import Constants from 'expo-constants'
import * as Google from 'expo-auth-session/providers/google'

function useAuthRequest() {
    const {
        GOOGLE_WEB_CLIENT_ID,
        GOOGLE_EXPO_CLIENT_ID,
        GOOGLE_ANDROID_CLIENT_ID
    } = Constants.expoConfig?.extra

    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: GOOGLE_WEB_CLIENT_ID,
        expoClientId: GOOGLE_EXPO_CLIENT_ID,
        androidClientId: GOOGLE_ANDROID_CLIENT_ID
    })

    return { request, response, promptAsync }
}

export default useAuthRequest