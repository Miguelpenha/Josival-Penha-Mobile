import { FC, useState } from 'react'
import useHandleSubmit from './useHandleSubmit'
import useModalize from '../../../../components/useModalize'
import { Container, Field, Label } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Input from '../../../../components/Input'
import CurrencyInput from 'react-native-currency-input'
import ButtonSelect from './ButtonSelect'
import ButtonSubmit from '../../../../components/ButtonSubmit'
import { Modalize } from 'react-native-modalize'
import ModalizeOptions from './ModalizeOptions'
import DateTimePicker from '@react-native-community/datetimepicker'
import methods from './methods'
import categories from './categories'

interface IProps {
    student: string
}

const Form: FC<IProps> = ({ student }) => {
    const [valueRaw, setValueRaw] = useState(1)
    const [value, setValue] = useState('')
    const [billingDate, setBillingDate] = useState(new Date().toLocaleDateString('pt-br'))
    const [showBillingDate, setShowBillingDate] = useState(false)
    const [payDate, setPayDate] = useState(new Date().toLocaleDateString('pt-br'))
    const [showPayDate, setShowPayDate] = useState(false)
    const [payMethod, setPayMethod] = useState('')
    const [category, setCategory] = useState('')
    const handleSubmit = useHandleSubmit({
        value,
        student,
        payDate,
        category,
        payMethod,
        billingDate,
    })
    const { modalize: modalizeOptionsMethods, props: propsModalizeOptionsMethods } = useModalize(70, 0, true)
    const { modalize: modalizeOptionsCategories, props: propsModalizeOptionsCategories } = useModalize(75, 0, true)

    return (
        <Container entering={FadeInDown.delay(200).duration(400)}>
            <Field entering={FadeInDown.delay(300).duration(400)}>
                <Label>Valor</Label>
                <CurrencyInput
                    prefix="R$ "
                    minValue={0}
                    delimiter="."
                    separator=","
                    precision={2}
                    value={valueRaw}
                    onChangeText={value => setValue(value)}
                    onChangeValue={value => setValueRaw(value)}
                    renderTextInput={props => <Input {...props}/>}
                />
            </Field>
            <Field entering={FadeInDown.delay(400).duration(400)}>
                <Label>Data da cobrança</Label>
                <ButtonSelect onPress={() => setShowBillingDate(true)} text={billingDate || 'Data da cobrança...'}/>
            </Field>
            <Field entering={FadeInDown.delay(500).duration(400)}>
                <Label>Data do pagamento</Label>
                <ButtonSelect onPress={() => setShowPayDate(true)} text={payDate || 'Data do pagamento...'}/>
            </Field>
            <Field entering={FadeInDown.delay(600).duration(400)}>
                <Label>Método</Label>
                <ButtonSelect onPress={modalizeOptionsMethods.open} text={payMethod || 'Método do pagamento...'}/>
            </Field>
            <Field entering={FadeInDown.delay(700).duration(400)}>
                <Label>Categoria</Label>
                <ButtonSelect onPress={modalizeOptionsCategories.open} text={category || 'Categoria da receita...'}/>
            </Field>
            <ButtonSubmit disabled={!value || !billingDate || !payDate || !payMethod || !category} loading title="Cadastrar" onPress={handleSubmit}/>
            {showBillingDate && (
                <DateTimePicker
                    mode="date"
                    is24Hour={true}
                    value={new Date()}
                    onChange={dateRaw => {
                        const date = new Date(dateRaw.nativeEvent.timestamp).toLocaleDateString('pt-br')

                        setShowBillingDate(false)

                        if (dateRaw.type === 'set') {
                            setBillingDate(date)
                        }
                    }}
                />
            )}
            {showPayDate && (
                <DateTimePicker
                    mode="date"
                    is24Hour={true}
                    value={new Date()}
                    onChange={dateRaw => {
                        const date = new Date(dateRaw.nativeEvent.timestamp).toLocaleDateString('pt-br')

                        setShowPayDate(false)
                        setPayDate(date)
                    }}
                />
            )}
            <Modalize {...propsModalizeOptionsMethods}>
                <ModalizeOptions setOption={setPayMethod} options={methods} modalize={modalizeOptionsMethods.ref}/>
            </Modalize>
            <Modalize {...propsModalizeOptionsCategories}>
                <ModalizeOptions setOption={setCategory} options={categories} modalize={modalizeOptionsCategories.ref}/>
            </Modalize>
        </Container>
    )
}

export default Form