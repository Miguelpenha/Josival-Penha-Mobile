import ContainerDefault from '../../components/ContainerDefault'
import { Title, IconNoWifi } from './style'
import { FadeInDown } from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'

function NotConnected() {
    return (
        <ContainerDefault>
            <Title entering={FadeInDown}>Sem internet</Title>
            <IconNoWifi name="wifi-off" size={RFPercentage(12)}/>
        </ContainerDefault>
    )
}

export default NotConnected