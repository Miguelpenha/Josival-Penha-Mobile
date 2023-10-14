import * as Updates from 'expo-updates'
import { green } from './colorsLogs'
import Toast from 'react-native-toast-message'
import { useEffect } from 'react'

function useUpdateApp() {
    async function updateApp() {
        const data: any = {  }

        if (process.env.NODE_ENV === 'production') {
            data.env = 'production'

            const { isAvailable } = await Updates.checkForUpdateAsync()

            if (isAvailable) {
                data.isAvailable = true

                data.channel = Updates.releaseChannel

                if (Updates.releaseChannel === 'production' || Updates.releaseChannel === 'main') {
                    console.log(green('>> Update Available'))

                    await Updates.fetchUpdateAsync()
                }
            }
        }

        Toast.show({
            type: 'info',
            autoHide: false,
            text1: JSON.stringify(data),
            async onPress() {
                await Updates.reloadAsync()
            }
        })
    }

    useEffect(() => {
        updateApp().then()
    }, [])
}

export default useUpdateApp