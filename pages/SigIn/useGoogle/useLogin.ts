import { AuthRequestPromptOptions, AuthSessionResult } from 'expo-auth-session'
import { useTheme } from 'styled-components'

function useLogin(promptAsync: (options?: AuthRequestPromptOptions) => Promise<AuthSessionResult>) {
    const theme = useTheme()

    async function login() {
        await promptAsync({
            controlsColor: theme.primary,
            toolbarColor: theme.backgroundColor,
            secondaryToolbarColor: theme.backgroundColorSecondary
        })
    }

    return { login }
}

export default useLogin