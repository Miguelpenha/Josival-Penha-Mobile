import { Container } from './style'
import buttons from './buttons'
import Button from '../../../../components/Button'
import Icon from '../../../../components/Icon'

function Buttons() {
    return (
        <Container>
            {buttons.map((button, index) => (
                <Button loading key={index} index={index} title={button.title} onPress={button.onPress}>
                    <Icon icon={button.icon} typeIcon={button.typeIcon}/>
                </Button>
            ))}
        </Container>
    )
}

export default Buttons