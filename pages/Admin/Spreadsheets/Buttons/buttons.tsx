import { IconName, TypeIcon } from '../../../../components/Icon/type'
import generateSpreadsheet from '../generateSpreadsheet'

interface IButton {
    title: string
    icon: IconName
    typeIcon?: TypeIcon
    onPress: () => void
}

const filtersGeneralSpreadsheet = ['Alunos', 'Turmas', 'Professoras', 'Financeiro']

const buttons: IButton[] = [
    {
        icon: 'teacher',
        typeIcon: 'Custom',
        title: 'Professoras',
        onPress: () => generateSpreadsheet('Professoras', 'Planilha de professoras')
    },
    {
        icon: 'book',
        title: 'Turmas',
        onPress: () => generateSpreadsheet('Turmas', 'Planilha de turmas')
    },
    {
        icon: 'school',
        title: 'Alunos',
        onPress: () => generateSpreadsheet('Alunos', 'Planilha de alunos')
    },
    {
        title: 'Financeiro',
        icon: 'account-balance',
        onPress: () => generateSpreadsheet('Financeiro', 'Planilha de financeiro')
    },
    {
        title: 'Geral',
        icon: 'device-hub',
        onPress: () => generateSpreadsheet(filtersGeneralSpreadsheet.toString(), 'Planilha geral')
    }
]

export default buttons