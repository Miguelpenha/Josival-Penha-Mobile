import * as Updates from 'expo-updates'
import { green } from './colorsLogs'

function useUpdateApp() {
    async function updateApp() {
        if (process.env.NODE_ENV === 'production') {
            const { isAvailable } = await Updates.checkForUpdateAsync()

            if (isAvailable && (Updates.releaseChannel === 'production' || Updates.releaseChannel === 'main')) {
                console.log(green('>> Update Available'))

                await Updates.fetchUpdateAsync()

                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    return updateApp
}

export default useUpdateApp