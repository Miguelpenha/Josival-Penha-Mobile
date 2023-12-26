import { useState } from 'react'
import ContainerDefault from '../../../components/ContainerDefault'
import HeaderBack from '../../../components/HeaderBack'
import Form from './Form'
import Preview from './Preview'
import { TabView, TabBar } from 'react-native-tab-view'
import { useWindowDimensions } from 'react-native'
import defaultForm from './defaultForm'
import api from '../../../services/api'
import { useTheme } from 'styled-components'

function renderTabBar(props) {
  const theme = useTheme()

  return (
    <TabBar 
      {...props}
      activeColor={theme.primary}
      labelStyle={{ color: theme.secondary }}
      indicatorStyle={{ backgroundColor: theme.primary }}
      style={{ backgroundColor: theme.backgroundColor, marginBottom: '0%' }}
    />
  )
}

function NotifyEmailNoticePayment() {
  const { width } = useWindowDimensions()
  const [indexTab, setIndexTab] = useState(0)
  const [title, setTitle] = useState(defaultForm.title)
  const [text, setText] = useState(defaultForm.text)
  const [titleButton, setTitleButton] = useState(defaultForm.action.text)
  const [linkButton, setLinkButton] = useState(defaultForm.action.link)
  const { data, mutate } = api.post<string, object>('/notify/email/preview', { title, text, action: { text: titleButton, link: linkButton }})

  return (
    <ContainerDefault>
      <HeaderBack>Enviar aviso de pagamento</HeaderBack>
      <TabView
        renderScene={({ route }) => {
          switch (route.key) {
            case 'form':
              return <Form linkButton={linkButton} mutate={mutate} setLinkButton={setLinkButton} setText={setText} setTitle={setTitle} setTitleButton={setTitleButton} text={text} title={title} titleButton={titleButton}/>
            case 'preview':
              return <Preview data={data}/>
              default:
                return null
              }
            }}
        initialLayout={{ width }}
        onIndexChange={setIndexTab}
        renderTabBar={renderTabBar}
        navigationState={{ index: indexTab, routes: [{ key: 'form', title: 'Escrever' }, { key: 'preview', title: 'Visualizar' }] }}
      />
    </ContainerDefault>
  )
}

export default NotifyEmailNoticePayment