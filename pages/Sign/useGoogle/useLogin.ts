import { AuthRequestPromptOptions, AuthSessionResult } from 'expo-auth-session'
import { useTheme } from 'styled-components'

function useLogin(promptAsync: (options?: AuthRequestPromptOptions) => Promise<AuthSessionResult>) {
    const theme = useTheme()

    async function login() {
        await promptAsync({
            toolbarColor: theme.primary,
            controlsColor: theme.primary,
            secondaryToolbarColor: theme.backgroundColorSecondary
        })
    }

    return { login }
}

export default useLogin