import { IconName, TypeIcon } from '../../../../components/Icon/type'
import generateSpreadsheet from '../generateSpreadsheet'

interface IButton {
    title: string
    icon: IconName
    typeIcon?: TypeIcon
    onPress: () => void
}

const filtersGeneralSpreadsheet = ['Alunos', 'Turmas', 'Professoras', 'Receitas']

const buttons: IButton[] = [
    {
        icon: 'teacher',
        typeIcon: 'Custom',
        title: 'Professoras',
        onPress: async () => await generateSpreadsheet('Professoras', 'Planilha de professoras')
    },
    {
        icon: 'book',
        title: 'Turmas',
        onPress: async () => await generateSpreadsheet('Turmas', 'Planilha de turmas')
    },
    {
        icon: 'school',
        title: 'Alunos',
        onPress: async () => await generateSpreadsheet('Alunos', 'Planilha de alunos')
    },
    {
        title: 'Receitas',
        icon: 'account-balance',
        onPress: async () => await generateSpreadsheet('Financeiro', 'Planilha de receitas')
    },
    {
        title: 'Geral',
        icon: 'device-hub',
        onPress: async () => await generateSpreadsheet(filtersGeneralSpreadsheet.toString(), 'Planilha geral')
    }
]

export default buttons