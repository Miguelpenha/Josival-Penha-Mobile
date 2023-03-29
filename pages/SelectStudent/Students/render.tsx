import { INavigation } from '../../../types'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ListRenderItem } from 'react-native'
import IStudent from '../../../types/student'
import Student from './Student'

interface IParams {
    next: keyof INavigation
}

function useRender(search: string) {
    const navigation = useNavigation()
    const { next } = useRoute().params as IParams

    const render: ListRenderItem<IStudent> = ({ item: student, index }) => {
        const searchInclude = student.name.toUpperCase().includes(search.toUpperCase())
        
        function handlePress() {
            const params: any = {
                studentID: student._id
            }
    
            navigation.navigate(next, params)
        }

        if (searchInclude) {
            return (
                <Student index={index} student={student} onPress={handlePress}/>
            )
        }
    }

    return render
}

export default useRender