import * as Updates from 'expo-updates'
import { green } from './colorsLogs'
import Toast from 'react-native-toast-message'

function useUpdateApp() {
    async function updateApp() {
        if (process.env.NODE_ENV === 'production') {
            const { isAvailable } = await Updates.checkForUpdateAsync()

            if (isAvailable && Updates.releaseChannel === 'main') {
                console.log(green('>> Update Available'))

                await Updates.fetchUpdateAsync()

                Toast.show({
                    type: 'info',
                    autoHide: false,
                    text1: 'Há atualizações disponíveis',
                    async onPress() {
                        await Updates.reloadAsync()
                    }
                })
            }
        }
    }

    return updateApp
}

export default useUpdateApp