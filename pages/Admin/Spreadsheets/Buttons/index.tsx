import { Container, ButtonSpreadsheet } from './style'
import buttons from './buttons'
import Icon from '../../../../components/Icon'

function Buttons() {
    return (
        <Container>
            {buttons.map((button, index) => (
                <ButtonSpreadsheet loading key={index} index={index} title={button.title} onPress={button.onPress}>
                    <Icon icon={button.icon} typeIcon={button.typeIcon}/>
                </ButtonSpreadsheet>
            ))}
        </Container>
    )
}

export default Buttons