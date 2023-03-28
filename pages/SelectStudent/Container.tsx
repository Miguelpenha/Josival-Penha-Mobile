import { FC } from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import ContainerPd from '../../components/ContainerPd'

interface Iprops {
  children: any
}

const Container: FC<Iprops> = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContainerPd>
          {children}
        </ContainerPd>
    </TouchableWithoutFeedback>
  )
}

export default Container