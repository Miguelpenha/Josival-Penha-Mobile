import * as Updates from 'expo-updates'
import { green } from './colorsLogs'
import Toast from 'react-native-toast-message'
import { useEffect } from 'react'

function useUpdateApp() {
    async function updateApp() {
        if (process.env.NODE_ENV === 'production') {
            const { isAvailable } = await Updates.checkForUpdateAsync()

            if (isAvailable && Updates.releaseChannel === 'production') {
                console.log(green('>> Update Available'))

                await Updates.fetchUpdateAsync()

                Toast.show({
                    type: 'info',
                    autoHide: false,
                    text1: 'Clique aqui para atualizar seu app',
                    async onPress() {
                        await Updates.reloadAsync()
                    }
                })
            }
        }
    }

    useEffect(() => {
        updateApp().then()
    }, [])
}

export default useUpdateApp