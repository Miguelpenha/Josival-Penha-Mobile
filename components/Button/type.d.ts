import { MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import icons from '../icons'

type TypeIcon = 'MaterialIcons' | 'AntDesign' | 'MaterialCommunityIcons' | 'Custom'
type IconName = keyof typeof MaterialIcons.glyphMap | keyof typeof AntDesign.glyphMap | keyof typeof MaterialCommunityIcons.glyphMap | keyof typeof icons

export {
    IconName,
    TypeIcon
}