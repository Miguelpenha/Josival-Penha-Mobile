import { FC } from 'react'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import ContainerDefault from '../../../components/ContainerDefault'

interface Iprops {
  children: any
}

const Container: FC<Iprops> = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContainerDefault scroll>
          <KeyboardAvoidingView behavior="padding" enabled>
            {children}
          </KeyboardAvoidingView>
        </ContainerDefault>
    </TouchableWithoutFeedback>
  )
}

export default Container