import { FC } from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import ContainerDefault from '../../../components/ContainerDefault'

interface Iprops {
  children: any
}

const Container: FC<Iprops> = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContainerDefault>
          {children}
        </ContainerDefault>
    </TouchableWithoutFeedback>
  )
}

export default Container