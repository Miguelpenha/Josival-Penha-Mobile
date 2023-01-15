import useAuth from '../../contexts/authContext'
import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import SimpleToast from 'react-native-simple-toast'
import { hasHardwareAsync, isEnrolledAsync, authenticateAsync } from 'expo-local-authentication'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import Button from './Button'

function SigIn() {
    const { logout } = useAuth()
    const navigation = useNavigation()
    const [supportFingerprint, setSupportFingerprint] = useState<boolean>()

    useEffect(() => {
        hasHardwareAsync().then(async support => {
            if (support) {
                setSupportFingerprint(await isEnrolledAsync())
            } else {
                setSupportFingerprint(false)
            }
        })
    }, [])

    async function onPressLogout() {
        await logout()

        navigation.navigate('Login')

        SimpleToast.show('Logout feito!', SimpleToast.SHORT)
    }
    
    async function onPressFingerprint() {
        const { success } = await authenticateAsync({ promptMessage: 'Digital', cancelLabel: 'Cancelar', disableDeviceFallback: true })

        if (success) {
            navigation.reset({
                index: 0,
                routes: [{
                    name: 'Class'
                }]
            })

            SimpleToast.show('SigIn feito!', SimpleToast.SHORT)
        } else {
            SimpleToast.show('Digital não reconhecida', SimpleToast.SHORT)
        }
    }

    return (
        <ContainerPd>
            <HeaderBack onPress={onPressLogout}>Logout</HeaderBack>
            {supportFingerprint ? (
                <Button icon="fingerprint" onPress={onPressFingerprint}>Digital</Button>
            ) : (
                <Button icon="login" onPress={() => navigation.reset({
                    index: 0,
                    routes: [{
                        name: 'Class'
                    }]
                })}>Entrar</Button>
            )}
        </ContainerPd>
    )
}

export default SigIn