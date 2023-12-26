import { useState } from 'react'
import api from '../../../services/api'
import defaultForm from './defaultForm'
import ContainerDefault from '../../../components/ContainerDefault'
import HeaderBack from '../../../components/HeaderBack'
import Form from './Form'
import Preview from './Preview'

function NotifyEmailNoticePayment() {
  const [title, setTitle] = useState(defaultForm.title)
  const [text, setText] = useState(defaultForm.text)
  const [titleButton, setTitleButton] = useState(defaultForm.action.text)
  const [linkButton, setLinkButton] = useState(defaultForm.action.link)
  const { data, mutate } = api.post<string, object>('/notify/email/preview', { title, text, action: { text: titleButton, link: linkButton } })

  return (
    <ContainerDefault scroll>
      <HeaderBack>Enviar aviso de pagamento</HeaderBack>
      <Form
        text={text}
        title={title}
        mutate={mutate}
        setText={setText}
        setTitle={setTitle}
        linkButton={linkButton}
        titleButton={titleButton}
        setLinkButton={setLinkButton}
        setTitleButton={setTitleButton}
      />
      <Preview data={data}/>
    </ContainerDefault>
  )
}

export default NotifyEmailNoticePayment