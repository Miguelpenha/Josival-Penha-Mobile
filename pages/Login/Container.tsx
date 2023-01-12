import { FC } from 'react'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import ContainerPd from '../../components/ContainerPd'

interface Iprops {
  children: any
}

const Container: FC<Iprops> = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContainerPd>
          <KeyboardAvoidingView behavior="position" enabled>
            {children}
          </KeyboardAvoidingView>
        </ContainerPd>
    </TouchableWithoutFeedback>
  )
}

export default Container