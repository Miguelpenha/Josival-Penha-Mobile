import * as Updates from 'expo-updates'
import { green } from './colorsLogs'

function useUpdateApp() {
    async function updateApp() {
        if (process.env.NODE_ENV === 'production') {
            const { isAvailable } = await Updates.checkForUpdateAsync()

            if (isAvailable) {
                console.log(green('>> Update Available'))

                const update = await Updates.fetchUpdateAsync()

                await Updates.reloadAsync()

                return update
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