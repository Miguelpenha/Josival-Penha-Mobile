import { Container } from './style'
import buttons from './buttons'
import Button from '../../../../components/Button'

function Buttons() {
    return (
        <Container>
            {buttons.map((button, index) => (
                <Button index={index} icon={button.icon} typeIcon={button.typeIcon} onPress={button.onPress}>
                    {button.title}
                </Button>
            ))}
        </Container>
    )
}

export default Buttons