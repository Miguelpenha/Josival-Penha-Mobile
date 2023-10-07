import { INavigation } from '../../../types'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ListRenderItemInfo } from '@shopify/flash-list'
import IStudent from '../../../types/student'
import Student from './Student'

interface IParams {
    next: keyof INavigation
}

function useRenderItem(search: string) {
    const navigation = useNavigation()
    const { next } = useRoute().params as IParams

    function renderItem({ item: student, index }: ListRenderItemInfo<IStudent>) {
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

    return renderItem
}

export default useRenderItem